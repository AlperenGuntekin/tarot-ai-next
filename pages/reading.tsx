import { useState } from 'react';
import { Card, Reading } from '../types';
import { shuffleDeck, interpretReading } from '../utils/tarotUtils';
import styles from '../client/styles/ReadingPage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardSlider from '@/client/components/CardSlider';
import LoadingSpinner from '@/client/components/LoadingScreen';
import '../app/globals.css';
import Header from '@/client/components/Header';

const ReadingPage: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>(shuffleDeck());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [reading, setReading] = useState<Reading | null>(null);
  const [isSelecting, setIsSelecting] = useState(true);
  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});
  const [questionType, setQuestionType] = useState<string | null>(null);
  const [specificQuestion, setSpecificQuestion] = useState<string>('');
  const [yesNoQuestion, setYesNoQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [birthChartInfo, setBirthChartInfo] = useState<{
    birthDate: string;
    birthTime: string;
    birthPlace: string;
  } | null>(null);

  const handleCardClick = (card: Card) => {
    if (questionType === 'yesNo' && selectedCards.length === 1) {
      return;
    }
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleBirthChartInfoChange = (
    field: keyof typeof birthChartInfo,
    value: string
  ) => {
    setBirthChartInfo(
      (prev) =>
        ({
          ...prev,
          [field]: value,
        } as { birthDate: string; birthTime: string; birthPlace: string })
    );
  };

  const toggleShowMore = (cardName: string) => {
    setShowMore((prev) => ({
      ...prev,
      [cardName]: !prev[cardName],
    }));
  };

  const performReading = async () => {
    if (
      (questionType === 'yesNo' &&
        selectedCards.length === 1 &&
        yesNoQuestion) ||
      (selectedCards.length === 3 && questionType)
    ) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/getReading', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            questionType,
            selectedCards,
            question:
              questionType === 'yesNo' ? yesNoQuestion : specificQuestion,
            birthChartInfo,
          }),
        });

        const data = await response.json();
        if (questionType === 'yesNo') {
          const answer = selectedCards[0].isReversed ? 'No' : 'Yes';
          setReading({
            cards: selectedCards,
            interpretation: `The answer to your question "${yesNoQuestion}" is: ${answer}`,
          });
        } else {
          setReading({
            cards: selectedCards,
            interpretation: data.interpretation,
          });
        }
        setIsSelecting(false);
      } catch (error) {
        console.error('Failed to get the interpretation from OpenAI', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetReading = () => {
    setDeck(shuffleDeck());
    setSelectedCards([]);
    setReading(null);
    setIsSelecting(true);
    setQuestionType(null);
    setSpecificQuestion('');
    setYesNoQuestion('');
    setBirthChartInfo(null);
  };

  const selectQuestionType = (type: string) => {
    setQuestionType(type);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Tarot Reading</h1>
        {!questionType ? (
          <>
            <p className={styles.instruction}>Choose your type of reading:</p>
            <div className={styles.optionsContainer}>
              <button
                className={styles.optionButton}
                onClick={() => selectQuestionType('general')}
              >
                General Reading
              </button>
              <button
                className={styles.optionButton}
                onClick={() => selectQuestionType('specific')}
              >
                Specific Question
              </button>
              <button
                className={styles.optionButton}
                onClick={() => selectQuestionType('yesNo')}
              >
                Yes or No Tarot
              </button>
              <button
                className={styles.optionButton}
                onClick={() => selectQuestionType('birthChart')}
              >
                Based on Birth Chart
              </button>
            </div>
          </>
        ) : isSelecting ? (
          <>
            <p className={styles.instruction}>
              {questionType === 'yesNo'
                ? 'Ask your yes/no question and select one card'
                : 'Select three cards for your reading'}
            </p>
            {questionType === 'yesNo' && (
              <input
                type="text"
                className={styles.textField}
                placeholder="Enter your yes/no question"
                value={yesNoQuestion}
                onChange={(e) => setYesNoQuestion(e.target.value)}
              />
            )}
            {questionType === 'specific' ? (
              <input
                type="text"
                className={styles.textField}
                placeholder="Enter your specific question"
                value={specificQuestion}
                onChange={(e) => setSpecificQuestion(e.target.value)}
              />
            ) : null}
            {questionType === 'birthChart' ? (
              <>
                <input
                  type="text"
                  className={styles.textField}
                  placeholder="Enter your birth date (YYYY-MM-DD)"
                  onChange={(e) =>
                    setBirthChartInfo((prev) => ({
                      ...(prev || {
                        birthDate: '',
                        birthTime: '',
                        birthPlace: '',
                      }),
                      birthDate: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  className={styles.textField}
                  placeholder="Enter your birth time (HH:MM)"
                  onChange={(e) =>
                    setBirthChartInfo((prev) => ({
                      ...(prev || {
                        birthDate: '',
                        birthTime: '',
                        birthPlace: '',
                      }),
                      birthTime: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  className={styles.textField}
                  placeholder="Enter your birth place"
                  onChange={(e) =>
                    setBirthChartInfo((prev) => ({
                      ...(prev || {
                        birthDate: '',
                        birthTime: '',
                        birthPlace: '',
                      }),
                      birthPlace: e.target.value,
                    }))
                  }
                />
              </>
            ) : null}

            <CardSlider
              deck={deck}
              selectedCards={selectedCards}
              handleCardClick={handleCardClick}
            />
            <button
              className={styles.button}
              onClick={performReading}
              disabled={
                questionType === 'yesNo'
                  ? !yesNoQuestion || selectedCards.length !== 1
                  : selectedCards.length !== 3
              }
            >
              Interpret Reading
            </button>
          </>
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className={styles.readingContainer}>
            <div className={styles.selectedCardsContainer}>
              {selectedCards.map((card) => (
                <div key={card.name} className={styles.selectedCard}>
                  <img
                    src={`/cards/${card.img}`}
                    alt={card.name}
                    className={`${styles.cardImage} ${
                      card.isReversed ? styles.reversed : ''
                    }`}
                  />
                  <div className={styles.cardDetails}>
                    <h3 className={styles.cardName}>{card.name}</h3>
                    <p className={styles.cardInfo}>
                      {card.arcana}, {card.suit ? `${card.suit}, ` : ''}Number:{' '}
                      {card.number}
                    </p>
                    <p className={styles.cardDescription}>
                      {showMore[card.name]
                        ? card.description
                        : `${card.description.slice(0, 100)}...`}
                      {card.description.length > 100 && (
                        <button
                          className={styles.readMoreButton}
                          onClick={() => toggleShowMore(card.name)}
                        >
                          {showMore[card.name] ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </p>
                    <p className={styles.cardInterpretation}>
                      {card.isReversed
                        ? card.interpretation.reversed
                        : card.interpretation.upright}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {reading && (
              <div className={styles.interpretationContainer}>
                <h2 className={styles.interpretationTitle}>
                  Reading Interpretation
                </h2>
                <div className={styles.interpretation}>
                  <p>{reading.interpretation}</p>
                </div>
              </div>
            )}
            <button className={styles.button} onClick={resetReading}>
              New Reading
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ReadingPage;

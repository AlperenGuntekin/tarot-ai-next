import { useState } from 'react';
import { Card, Reading } from '../types';
import { shuffleDeck, interpretReading } from '../utils/tarotUtils';
import styles from '../client/styles/ReadingPage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardSlider from '@/client/components/CardSlider';
import QuestionTypeSelector from '@/client/components/QuestionTypeSelector';
import ReadingInterpretation from '@/client/components/ReadingInterpretation';
import SelectedCards from '@/client/components/SelectedCards';

const ReadingPage: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>(shuffleDeck());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [reading, setReading] = useState<Reading | null>(null);
  const [isSelecting, setIsSelecting] = useState(true);
  const [questionType, setQuestionType] = useState<string | null>(null);
  const [specificQuestion, setSpecificQuestion] = useState<string>('');

  const handleCardClick = (card: Card) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const performReading = async () => {
    if (selectedCards.length === 3 && questionType) {
      if (['specific', 'yesNo', 'birthChart'].includes(questionType)) {
        const response = await fetch('http://localhost:5000/api/getReading', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            questionType,
            selectedCards,
            question: specificQuestion,
          }),
        });

        const responseText = await response.text();
        console.log(responseText); // Log the response text for debugging

        try {
          const data = JSON.parse(responseText); // Parse the response text
          setReading({
            cards: selectedCards,
            interpretation: data.interpretation,
          });
        } catch (error) {
          console.error('Failed to parse JSON:', error);
        }
      } else {
        setReading(interpretReading(selectedCards));
      }
      setIsSelecting(false);
    }
  };

  const resetReading = () => {
    setDeck(shuffleDeck());
    setSelectedCards([]);
    setReading(null);
    setIsSelecting(true);
    setQuestionType(null);
    setSpecificQuestion('');
  };

  const selectQuestionType = (type: string) => {
    setQuestionType(type);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tarot Reading</h1>
      {!questionType ? (
        <QuestionTypeSelector selectQuestionType={selectQuestionType} />
      ) : isSelecting ? (
        <>
          <p className={styles.instruction}>
            Select three cards for your {questionType} reading
          </p>
          {questionType === 'specific' || questionType === 'yesNo' ? (
            <div className={styles.questionContainer}>
              <label
                htmlFor="specificQuestion"
                className={styles.questionLabel}
              >
                Enter your question:
              </label>
              <input
                type="text"
                id="specificQuestion"
                value={specificQuestion}
                onChange={(e) => setSpecificQuestion(e.target.value)}
                className={styles.questionInput}
              />
            </div>
          ) : null}
          <CardSlider
            deck={deck}
            selectedCards={selectedCards}
            handleCardClick={handleCardClick}
          />
          <button
            className={styles.button}
            onClick={performReading}
            disabled={selectedCards.length !== 3}
          >
            Interpret Reading
          </button>
        </>
      ) : (
        <div className={styles.readingContainer}>
          <SelectedCards selectedCards={selectedCards} />
          {reading && (
            <ReadingInterpretation interpretation={reading.interpretation} />
          )}
          <button className={styles.button} onClick={resetReading}>
            New Reading
          </button>
        </div>
      )}
    </div>
  );
};

export default ReadingPage;

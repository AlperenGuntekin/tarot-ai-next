import { useState } from 'react';
import { Card, Reading } from '../types';
import { shuffleDeck, interpretReading } from '../utils/tarotUtils';
import styles from '../styles/ReadingPage.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QuestionTypeSelector from '../components/QuestionTypeSelector';
import CardSlider from '../components/CardSlider';
import SelectedCards from '../components/SelectedCards';
import ReadingInterpretation from '../components/ReadingInterpretation';

const ReadingPage: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>(shuffleDeck());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [reading, setReading] = useState<Reading | null>(null);
  const [isSelecting, setIsSelecting] = useState(true);
  const [questionType, setQuestionType] = useState<string | null>(null);

  const handleCardClick = (card: Card) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const performReading = () => {
    if (selectedCards.length === 3) {
      setReading(interpretReading(selectedCards));
      setIsSelecting(false);
    }
  };

  const resetReading = () => {
    setDeck(shuffleDeck());
    setSelectedCards([]);
    setReading(null);
    setIsSelecting(true);
    setQuestionType(null);
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
            Select the 3 cards you want by sliding the deck for your{' '}
            {questionType} reading.
          </p>
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
          {reading && <ReadingInterpretation reading={reading} />}
          <button className={styles.button} onClick={resetReading}>
            New Reading
          </button>
        </div>
      )}
    </div>
  );
};

export default ReadingPage;

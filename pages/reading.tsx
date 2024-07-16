import { useState } from 'react';
import { Card, Reading } from '../types';
import { shuffleDeck, interpretReading } from '../utils/tarotUtils';
import styles from '../styles/ReadingPage.module.css';

const ReadingPage: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>(shuffleDeck());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [reading, setReading] = useState<Reading | null>(null);
  const [isSelecting, setIsSelecting] = useState(true);

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
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tarot Reading</h1>
      {isSelecting ? (
        <>
          <p className={styles.instruction}>
            Select three cards for your reading
          </p>
          <div className={styles.deckContainer}>
            {deck.map((card) => (
              <div
                key={card.name}
                className={`${styles.card} ${
                  selectedCards.includes(card) ? styles.selected : ''
                }`}
                onClick={() => handleCardClick(card)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <img
                      src="cards/card-back.png"
                      alt="Card Back"
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <img
                      src={`/cards/${card.img}`}
                      alt={card.name}
                      className={`${styles.cardImage} ${
                        card.isReversed ? styles.reversed : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                  <p className={styles.cardDescription}>{card.description}</p>
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
              <p className={styles.interpretation}>{reading.interpretation}</p>
            </div>
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

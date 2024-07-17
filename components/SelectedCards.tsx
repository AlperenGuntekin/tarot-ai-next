import React from 'react';
import { Card } from '../types';
import styles from '../styles/SelectedCards.module.css';

type SelectedCardsProps = {
  selectedCards: Card[];
};

const SelectedCards: React.FC<SelectedCardsProps> = ({ selectedCards }) => {
  return (
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
  );
};

export default SelectedCards;

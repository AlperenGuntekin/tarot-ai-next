import React from 'react';
import Slider from 'react-slick';
import { Card } from '../../types';
import styles from '../styles/CardSlider.module.css';

type CardSliderProps = {
  deck: Card[];
  selectedCards: Card[];
  handleCardClick: (card: Card) => void;
};

const CardSlider: React.FC<CardSliderProps> = ({
  deck,
  selectedCards,
  handleCardClick,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 11,
    rows: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
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
    </Slider>
  );
};

export default CardSlider;

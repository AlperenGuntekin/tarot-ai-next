import React from 'react';
import styles from '../styles/ReadingPage.module.css';

type QuestionTypeSelectorProps = {
  selectQuestionType: (type: string) => void;
};

const QuestionTypeSelector: React.FC<QuestionTypeSelectorProps> = ({
  selectQuestionType,
}) => {
  return (
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
          onClick={() => selectQuestionType('love')}
        >
          Love Reading
        </button>
        <button
          className={styles.optionButton}
          onClick={() => selectQuestionType('money')}
        >
          Money Reading
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
  );
};

export default QuestionTypeSelector;

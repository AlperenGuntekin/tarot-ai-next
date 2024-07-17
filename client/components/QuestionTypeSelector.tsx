import React from 'react';
import styles from '../styles/QuestionTypeSelector.module.css';

type QuestionTypeSelectorProps = {
  selectQuestionType: (type: string) => void;
};

const QuestionTypeSelector: React.FC<QuestionTypeSelectorProps> = ({
  selectQuestionType,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.instruction}>Choose your type of reading:</p>
      <div className={styles.optionsContainer}>
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
          onClick={() => selectQuestionType('birthChart')}
        >
          Based on Birth Chart
        </button>
        <button
          className={styles.optionButton}
          onClick={() => selectQuestionType('yesNo')}
        >
          Yes or No Tarot
        </button>
      </div>
    </div>
  );
};

export default QuestionTypeSelector;

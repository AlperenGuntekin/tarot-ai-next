import React from 'react';
import styles from '../styles/ReadingInterpretation.module.css';

type ReadingInterpretationProps = {
  interpretation: string;
};

const ReadingInterpretation: React.FC<ReadingInterpretationProps> = ({
  interpretation,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reading Interpretation</h2>
      <p className={styles.text}>{interpretation}</p>
    </div>
  );
};

export default ReadingInterpretation;

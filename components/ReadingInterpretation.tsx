import React from 'react';
import { Reading } from '../types';
import styles from '../styles/ReadingPage.module.css';

type ReadingInterpretationProps = {
  reading: Reading;
};

const ReadingInterpretation: React.FC<ReadingInterpretationProps> = ({
  reading,
}) => {
  return (
    <div className={styles.interpretationContainer}>
      <h2 className={styles.interpretationTitle}>Reading Interpretation</h2>
      <p className={styles.interpretation}>{reading.interpretation}</p>
    </div>
  );
};

export default ReadingInterpretation;

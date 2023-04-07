import React, { useState, useEffect } from 'react';
import styles from '@/styles/mainSection/carousel.module.scss';

const words = ['word1', 'word2', 'word3', 'word4', 'word5'];

const Carousel = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  // const [previousWordIndex, setPreviousWordIndex] = useState(words.length - 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setPreviousWordIndex(activeWordIndex);
      setActiveWordIndex((activeWordIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [activeWordIndex]);

  return (
    <div>
      <div className={styles.container2}>
        <span className={styles.word2}>{words[activeWordIndex]}</span>
        <span style={{ opacity: 0.5, margin: 10 }}>for</span>
      </div>
    </div>
  );
};

export default Carousel;

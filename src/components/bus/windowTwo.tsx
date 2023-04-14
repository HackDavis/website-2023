import React from 'react';
import styles from '@/styles/bus/windowTwo.module.scss';
import Create from './create';

const WindowTwo = () => (
  <div className={styles.container}>
    <Create />
    <div className={styles.divider} />
    <div className={styles.right}>
      <div className={styles.handle} />
      <div className={styles.info}>
        <h2>
          create for <span>social good</span>
        </h2>
        <p>
          With the rapid advancement of technology, it is important to use its
          power in ways that benefit society. HackDavis challenges its
          participants to create for social good, and create an opportunity for
          us to explore the intersection between technology and society.
        </p>
      </div>
    </div>
  </div>
);

export default WindowTwo;

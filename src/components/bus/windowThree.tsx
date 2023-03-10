import React from 'react';
import styles from '@/styles/bus/windowThree.module.scss';

const WindowThree = () => (
  <div className={styles.container}>
    <div className={styles.fake}></div>
    <div className={styles.info}>
      <strong>
        36<span className={styles.space}> </span>
        <span>hours</span>
      </strong>
      <strong>
        140+<span className={styles.space}> </span>
        <span>projects</span>
      </strong>
      <strong>
        700+<span className={styles.space}> </span>
        <span>hackers</span>
      </strong>
      <strong>
        $15,000+<span className={styles.space}> </span>
        <span>prizes</span>
      </strong>
      <button type="button">View 2022 Winners</button>
    </div>
  </div>
);

export default WindowThree;

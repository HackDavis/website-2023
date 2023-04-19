import React from 'react';
import styles from '@/styles/bus/windowThree.module.scss';
import Flair from './flair';

const WindowThree = () => (
  <div className={styles.container}>
    <Flair />
    <div className={styles.divider} />
    <div className={styles.left}>
      <div className={styles.info}>
        <strong>
          24<span className={styles.space}> </span>
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
        <a
          href="https://hackdavis2022.devpost.com/project-gallery"
          target="_blank"
          rel="noreferrer"
        >
          View 2022 Winners
        </a>
        {/* <a
          href="https://hackdavis2022.devpost.com/project-gallery"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">View 2022 Winners</button>
        </a> */}
      </div>
      <div className={styles.handle} />
    </div>
  </div>
);

export default WindowThree;

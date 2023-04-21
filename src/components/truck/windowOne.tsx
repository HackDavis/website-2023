import React from 'react';
import styles from '@/styles/truck/windowOne.module.scss';
import Churner from './churner';

const WindowOne = () => (
  <div className={styles.container}>
    <Churner />
    <p className={styles.info}>
      HackDavis <span>is the</span> largest collegiate hackathon{' '}
      <span>
        in California where over 700 students, creators, and leaders come
        together for 24 hours to
      </span>{' '}
      create for social good.
    </p>
  </div>
);

export default WindowOne;

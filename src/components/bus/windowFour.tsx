import React from 'react';
import styles from '@/styles/bus/windowFour.module.scss';
import Share from './share';
import Driver from './driver';

const WindowFour = () => (
  <div className={styles.container}>
    <Share />
    <Driver />
  </div>
);

export default WindowFour;

import React from 'react';
import styles from '@/styles/truck/windowFour.module.scss';
import Driver from './driver';
import Flair from './flair';

const Window = () => (
  <div className={styles.container}>
    <Flair />
    <Driver />
  </div>
);

export default Window;

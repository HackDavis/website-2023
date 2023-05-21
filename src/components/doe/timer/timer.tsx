import React from 'react';
import CountdownTimer, { CountdownRenderProps } from 'react-countdown';
import styles from '@/styles/doe/timer/timer.module.scss';
import ProgressBarDoe from './progressBarDoe';

const padNumber = (num: number) => (num < 10 ? `0${num}` : num);

export const CountdownFallback = () => (
  <div className={styles.wrapper}>
    <ProgressBarDoe />
    <div className={styles.container}>
      <div className={styles.clock}>
        <div>
          <span>24</span>
          <strong>HOURS</strong>
        </div>
        <span>:</span>
        <div>
          <span>00</span>
          <strong>MINUTES</strong>
        </div>
        <span>:</span>
        <div>
          <span>00</span>
          <strong>SECONDS</strong>
        </div>
      </div>
    </div>
    <div className={styles.sticks}></div>
  </div>
);

const Countdown = () => {
  const start = new Date('May 20, 2023, 11:00:00 GMT-0700');
  const end = new Date('May 21, 2023, 11:00:00 GMT-0700');
  const ongoing = new Date() > start;

  const Timer = ({ hours, minutes, seconds }: CountdownRenderProps) => (
    <div className={styles.wrapper}>
      <ProgressBarDoe />
      <div className={styles.container}>
        <div className={styles.clock}>
          <div>
            <span>{ongoing ? padNumber(hours) : '24'}</span>
            <strong>HOURS</strong>
          </div>
          <span>:</span>
          <div>
            <span>{ongoing ? padNumber(minutes) : '00'}</span>
            <strong>MINUTES</strong>
          </div>
          <span>:</span>
          <div>
            <span>{ongoing ? padNumber(seconds) : '00'}</span>
            <strong>SECONDS</strong>
          </div>
        </div>
      </div>
      <div className={styles.sticks}></div>
      <div className={styles.truck} />
    </div>
  );

  return (
    <CountdownTimer
      date={end}
      zeroPadTime={2}
      intervalDelay={0}
      precision={1}
      renderer={Timer}
    />
  );
};

export default Countdown;

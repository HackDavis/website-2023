import React from 'react';
import CountdownTimer, { CountdownRenderProps } from 'react-countdown';
import styles from '@/styles/doe/countdown.module.scss';

const Countdown = () => {
  const start = new Date('May 20, 2023, 11:00:00 GMT-0700');
  const end = new Date('May 21, 2023, 11:00:00 GMT-0700');
  const ongoing = new Date() > start;

  const Timer = ({ hours, minutes, seconds }: CountdownRenderProps) => (
    <>
      <div className={styles.container}>
        <div className={styles.clock}>
          <div>
            <span>{ongoing ? hours : '24'}</span>
            <p>HOURS</p>
          </div>
          <div>:</div>
          <div>
            <span>{ongoing ? minutes : '00'}</span>
            <p>MINUTES</p>
          </div>
          <div>:</div>
          <div>
            <span>{ongoing ? seconds : '00'}</span>
            <p>SECONDS</p>
          </div>
        </div>
      </div>
      <div className={styles.sticks}></div>
    </>
  );

  return (
    <CountdownTimer
      date={end}
      intervalDelay={0}
      precision={3}
      renderer={Timer}
    />
  );
};

export default Countdown;

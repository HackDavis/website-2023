/* eslint-disable no-undefined */
import React, { Fragment, PropsWithChildren } from 'react';
import styles from '@/styles/sponsors/marquee.module.scss';

interface MarqueeOptions {
  reverse?: boolean;
  iterations?: number;
  duration?: number;
}

const Marquee = ({
  reverse,
  iterations = 1,
  duration,
  children,
}: PropsWithChildren<MarqueeOptions>) => {
  // eslint-disable-next-line unicorn/new-for-builtins, unicorn/prefer-spread
  const keys = Array.from(Array(iterations).keys());

  return (
    <div className={styles.marquee}>
      <ul
        style={duration ? { animationDuration: `${duration}s` } : undefined}
        className={`${styles.marqueeGroup} ${reverse ? styles.reverse : ''}`}
      >
        {keys.map((idx) => (
          <Fragment key={idx}>{children}</Fragment>
        ))}
      </ul>
      <ul
        style={duration ? { animationDuration: `${duration}s` } : undefined}
        className={`${styles.marqueeGroup} ${reverse ? styles.reverse : ''}`}
        aria-hidden="true"
      >
        {keys.map((idx) => (
          <Fragment key={idx}>{children}</Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;

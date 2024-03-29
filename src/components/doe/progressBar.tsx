import { Flag, FlagPole, MiniTruck } from '@/assets/doe';
import styles from '@/styles/doe/progressBar.module.scss';
import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const end = new Date('May 21, 2023, 11:00:00 GMT-0700').getTime();
  const [progress, setProgress] = useState(
    Math.min(100, (1 - (end - Date.now()) / (24 * 60 * 60000)) * 100)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const percentDone = Math.max(
        0,
        (1 - (end - now) / (24 * 60 * 60000)) * 100
      );

      setProgress(Math.min(100, percentDone));
    }, 60000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <MiniTruck style={{ left: `calc(${progress}% - 26%)` }} />
      <div className={styles.flag}>
        <FlagPole />
        <Flag style={{ bottom: `calc(${progress * 0.52}% + 13%)` }} />
      </div>
    </div>
  );
};

export default ProgressBar;

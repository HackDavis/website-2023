import styles from '@/styles/bus/share.module.scss';
import { ShareBackground } from '@/assets/share';

const Share = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <ShareBackground />
    </div>
    <div className={styles.ledge} />
    <div className={styles.bottom} />
  </div>
);

export default Share;

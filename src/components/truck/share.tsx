import styles from '@/styles/truck/share.module.scss';
import { ShareBackground } from '@/assets/truck/share';

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

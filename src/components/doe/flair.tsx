import { FlairBackground } from '@/assets/doe';
import styles from '@/styles/doe/flair.module.scss';

const Flair = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <FlairBackground />
    </div>
    <div className={styles.ledge} />
    <div className={styles.bottom} />
  </div>
);

export default Flair;

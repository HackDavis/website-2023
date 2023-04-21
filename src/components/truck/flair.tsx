import { FlairBackground, FlairDuckyAndCherry } from '@/assets/truck/flair';
import styles from '@/styles/truck/flair.module.scss';

const Flair = () => (
  <div className={styles.container}>
    <FlairBackground />
    <FlairDuckyAndCherry />
  </div>
);

export default Flair;

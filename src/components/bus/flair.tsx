import { FlairBackground, FlairDuckyAndCherry } from '@/assets/flair';
import styles from '@/styles/bus/flair.module.scss';

const Flair = () => (
  <div className={styles.container}>
    <FlairBackground />
    <FlairDuckyAndCherry />
  </div>
);

export default Flair;

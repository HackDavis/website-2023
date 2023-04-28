import styles from '@/styles/sponsors/sponsors2.module.scss';
import { Heart } from '@/assets/mainSection/misc';
import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';
const Sponsors2 = () => (
  <div className={styles.sponsorsSection}>
    <div className={styles.heartButton}>
      <Heart />
    </div>
    <h2 className={styles.support}>support for social good.</h2>
    <div className={styles.sponsorsContainer}>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  </div>
);

export default Sponsors2;

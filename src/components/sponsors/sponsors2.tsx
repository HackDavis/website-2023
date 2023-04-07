import styles from '@/styles/sponsors/sponsors2.module.scss';
import Image from 'next/image';
import heart from '@/images/heart.svg';
import Row1 from './row1';
import Row2 from './row2';

const Sponsors2 = () => (
  <div className={styles.sponsorsSection}>
    <div className={styles.heartButton}>
      <Image src={heart} height={21.88} width={25.08} alt="" />
    </div>
    <div className={styles.support}>support for social good.</div>
    <div className={styles.sponsorsContainer}>
      <Row1 />
      <Row2 />
    </div>
  </div>
);

export default Sponsors2;

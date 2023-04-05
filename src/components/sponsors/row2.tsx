import Image from 'next/image';
import styles from '@/styles/sponsors2.module.scss';
import yakult from '@/images/sponsors/yakult.png';
import pocky from '@/images/sponsors/pocky.svg';

const Row2 = () => (
  <div className={styles.sponsorsRow}>
    <div
      className={`${styles.horizontalScroll} ${styles.row2} ${styles.primary}`}
    >
      <Image src={yakult} alt="" className={styles.logo} />
      <Image src={pocky} alt="" className={styles.logo} />
    </div>
    <div
      className={`${styles.horizontalScroll} ${styles.row2} ${styles.secondary}`}
    >
      <Image src={yakult} alt="" className={styles.logo} />
      <Image src={pocky} alt="" className={styles.logo} />
    </div>
  </div>
);

export default Row2;

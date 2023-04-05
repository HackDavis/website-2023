import Image from 'next/image';
import styles from '@/styles/sponsors2.module.scss';
import chevron from '@/images/sponsors/chevron.png';
import cs from '@/images/sponsors/cs.png';
import globalAffairs from '@/images/sponsors/globalaffairs.png';
import ls from '@/images/sponsors/ls.png';

const Row1 = () => (
  <div className={styles.sponsorsRow}>
    <div className={`${styles.horizontalScroll} ${styles.primary}`}>
      <Image src={chevron} alt="" className={styles.logo} />
      <Image src={cs} alt="" className={styles.logo} />
      <Image src={globalAffairs} alt="" className={styles.logo} />
      <Image src={ls} alt="" className={styles.logo} />
    </div>
    <div className={`${styles.horizontalScroll} ${styles.secondary}`}>
      <Image src={chevron} alt="" className={styles.logo} />
      <Image src={cs} alt="" className={styles.logo} />
      <Image src={globalAffairs} alt="" className={styles.logo} />
      <Image src={ls} alt="" className={styles.logo} />
    </div>
  </div>
);

export default Row1;

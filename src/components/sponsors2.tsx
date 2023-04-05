import styles from '@/styles/sponsors2.module.scss';
import Image from 'next/image';
import heart from '@/images/heart.svg';
import HDLogo from '@/images/sponsorHDLogoTest.svg';

const Sponsors2 = () => (
  <div className={styles.sponsorsSection}>
    <div className={styles.heartButton}>
      <Image src={heart} alt="" />
    </div>
    <div className={styles.support}>support for social good.</div>
    <div className={styles.sponsorsContainer}>
      <div className={styles.sponsorsRow1}>
        <div className={`${styles.horizontalScroll} ${styles.primary}`}>
          <Image src={HDLogo} alt="" className={styles.logo} />
          <Image src={HDLogo} alt="" className={styles.logo} />
          <Image src={HDLogo} alt="" className={styles.logo} />
          <Image src={HDLogo} alt="" className={styles.logo} />
          {/* <Image src={HDLogo} alt='' className={styles.logo}/> */}
        </div>
        <div className={`${styles.horizontalScroll} ${styles.secondary}`}>
          <Image src={HDLogo} alt="" className={styles.logo} />
          <Image src={HDLogo} alt="" className={styles.logo} />
          <Image src={HDLogo} alt="" className={styles.logo} />
          <Image src={HDLogo} alt="" className={styles.logo} />
          {/* <Image src={HDLogo} alt='' className={styles.logo}/> */}
        </div>
      </div>
      <div className={styles.sponsorsRow2}></div>
    </div>
  </div>
);

export default Sponsors2;

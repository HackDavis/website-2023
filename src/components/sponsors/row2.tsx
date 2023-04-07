import Image from 'next/image';
import styles from '@/styles/sponsors/sponsors2.module.scss';
import yakult from '@/images/sponsors/yakult.png';
import pocky from '@/images/sponsors/pocky.svg';

const Row2 = () => {
  const logo = (imgSrc:any) => {
    return(
      <div className={styles.logoContainer}>
        <Image src={imgSrc} alt='' className={styles.logo} />
      </div>
    )
  }
  return(
    <div className={`${styles.sponsorsRow} ${styles.row2}`}>
      <div className={`${styles.horizontalScroll} ${styles.primary}`}>
        {logo(yakult)}
        {logo(pocky)}
      </div>
      <div className={`${styles.horizontalScroll} ${styles.secondary}`}>
        {logo(yakult)}
        {logo(pocky)}
      </div>
    </div>
  )
};

export default Row2;

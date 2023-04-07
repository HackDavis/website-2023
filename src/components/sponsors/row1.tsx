import Image from 'next/image';
import styles from '@/styles/sponsors/sponsors2.module.scss';
import chevron from '@/images/sponsors/chevron.png';
import cs from '@/images/sponsors/cs.png';
import globalAffairs from '@/images/sponsors/globalaffairs.png';
import ls from '@/images/sponsors/ls.png';

const Row1 = () => {
  const logo = (imgSrc:any) => {
    return(
      <div className={styles.logoContainer}>
        <Image src={imgSrc} alt='' className={styles.logo} />
      </div>
    )
  }
  return(

      <div className={styles.sponsorsRow}>
      <div className={`${styles.horizontalScroll} ${styles.primary}`}>

        {logo(chevron)}
        {logo(cs)}
        {logo(globalAffairs)}
        {logo(ls)}
      </div>
      <div className={`${styles.horizontalScroll} ${styles.secondary}`}>
        {logo(chevron)}
        {logo(cs)}
        {logo(globalAffairs)}
        {logo(ls)}
      </div>
    </div>
  )
};

export default Row1;

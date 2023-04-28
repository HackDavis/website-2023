import Image, { StaticImageData } from 'next/image';
import Logo from "./logo";
import styles from '@/styles/sponsors/sponsors2.module.scss';
import chevron from '@/images/sponsors/chevron.png';
import cs from '@/images/sponsors/cs.png';
import globalAffairs from '@/images/sponsors/globalaffairs.png';
import datalab from '@/images/sponsors/datalab.png';
import asucd from '@/images/sponsors/asucd.png';
import cfc from '@/images/sponsors/cfc.png';
import ssc from '@/images/sponsors/ssc.png';
import iet from '@/images/sponsors/iet.png';

const Row1 = () => {

  return (
    <div className={styles.sponsorsRow}>
      <div className={`${styles.horizontalScroll} ${styles.primary}`}>
        <Logo imgSrc={chevron}/>
        <Logo imgSrc={cs}/>
        <Logo imgSrc={globalAffairs}/>
        <Logo imgSrc={iet}/>
      </div>
      <div className={`${styles.horizontalScroll} ${styles.secondary}`}>
        {/* <Logo imgSrc={datalab}/> */}
        <Logo imgSrc={chevron}/>
        <Logo imgSrc={cs}/>
        <Logo imgSrc={globalAffairs}/>
        <Logo imgSrc={iet}/>
      </div>
    </div>
  );
};

export default Row1;

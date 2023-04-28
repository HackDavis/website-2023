import Image, { StaticImageData } from 'next/image';
import Logo from './logo';
import styles from '@/styles/sponsors/sponsors2.module.scss';
import ls from '@/images/sponsors/ls.png';
import datalab from '@/images/sponsors/datalab.png';
import ssc from '@/images/sponsors/ssc.png';
import asucd from '@/images/sponsors/asucd.png';
import cfc from '@/images/sponsors/cfc.jpg';

const Row2 = () => {
  return (
    <div className={`${styles.sponsorsRow} ${styles.row2}`}>
      <div className={`${styles.horizontalScroll} ${styles.primary}`}>
        <Logo imgSrc={ls}/>
        <Logo imgSrc={datalab}/>
        <Logo imgSrc={ssc}/>
        <Logo imgSrc={asucd}/>
        {/* <Logo imgSrc={cfc}/> */}
      </div>
      <div className={`${styles.horizontalScroll} ${styles.secondary}`}>
        <Logo imgSrc={ls}/>
        <Logo imgSrc={datalab}/>
        <Logo imgSrc={ssc}/>
        <Logo imgSrc={asucd}/>
        {/* <Logo imgSrc={cfc}/> */}
      </div>
    </div>
  );
};

export default Row2;

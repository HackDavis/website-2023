import React from 'react';
import Image from 'next/image';
import banner from '@/images/banner.svg';
import styles from '@/styles/truck/truck.module.scss';
import WindowOne from './windowOne';
import WindowTwo from './windowTwo';
import WindowThree from './windowThree';
import WindowFour from './windowFour';
import Bottom from './bottom';

const Truck = () => (
  <div className={styles.background}>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <WindowOne />
        <WindowTwo />
        <WindowThree />
        <WindowFour />
        <Bottom />
      </div>
      <Image src={banner} alt="banner" className={styles.banner} />
    </div>
  </div>
);

export default Truck;

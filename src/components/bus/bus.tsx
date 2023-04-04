import React, { useEffect, useState } from 'react';
import styles from '@/styles/bus/bus.module.scss';
import Image from 'next/image';
import banner from '@/images/banner.svg';
import Banner from '@/assets';
import WindowOne from './windowOne';
import WindowTwo from './windowTwo';
import WindowThree from './windowThree';
import WindowFour from './windowFour';

const Bus = () => (
  <>
    <div style={{ height: 900 }} />
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <WindowOne />
          <WindowTwo />
          <WindowThree />
          <WindowFour />
        </div>
        <Image src={banner} alt="banner" className={styles.banner} />
        {/* <Banner /> */}
      </div>
    </div>
    <div style={{ height: 900 }} />
  </>
);

export default Bus;

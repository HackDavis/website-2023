import React from 'react';
import Image from 'next/image';
import banner from '@/images/banner.svg';
import styles from '@/styles/truck/truck.module.scss';
import WindowOne from './windowOne';
import WindowTwo from './windowTwo';
import WindowThree from './windowThree';
import WindowFour from './windowFour';
import Bottom from './bottom';
import Clouds from './clouds';

const Truck = () => (
  <>
    <Clouds />
    <section id="info" className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <WindowOne />
          <WindowTwo />
          <WindowThree />
          <WindowFour />
          <Bottom />
        </div>
        <Image
          src={banner}
          alt="create for social good banner"
          className={styles.banner}
        />
      </div>
    </section>
  </>
);

export default Truck;

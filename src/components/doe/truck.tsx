import React from 'react';
import Image from 'next/image';
import banner from '@/images/doe/banner.svg';
import styles from '@/styles/doe/truck.module.scss';
import Bottom from '@/components/doe/bottom';
import Clouds from '@/components/truck/clouds';
import Window from './window';
import Schedule from './schedule';
import Quickstart from './quickstart';

const Truck = () => (
  <>
    <Clouds />
    <section id="info" className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Quickstart />
          <Schedule />
          <Window />
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

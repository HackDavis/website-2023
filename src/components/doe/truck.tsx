import React from 'react';
import Image from 'next/image';
import banner from '@/images/banner.svg';
import styles from '@/styles/doe/truck.module.scss';
import Bottom from '@/components/truck/bottom';
import Clouds from '@/components/truck/clouds';
import Countdown from './countdown';
import Window from './window';
import Schedule from './schedule';
import Quickstart from './quickstart';

const Truck = () => (
  <>
    <Clouds />
    <section id="info" className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Countdown />
          <div
            style={{
              backgroundColor: 'white',
              padding: 70,
              borderRadius: '20px 20px 0 0',
            }}
          >
            <Quickstart />
            <Schedule />
            <Window />
            <Bottom />
          </div>
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

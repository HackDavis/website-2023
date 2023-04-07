/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import arrowUp from '@/images/arrowUp.svg';
import heart from '@/images/heart.svg';
import calendar from '@/images/calendar.svg';
import styles from '@/styles/mainSection/mainSection.module.scss';
// import cloudBg from '@/images/cloudBg.svg';
// import CowCone from '@/images/cowCone.svg';
import CowCone from './cowCone';
import Clouds from './clouds';
// import cowHand from '@/images/cowHand.svg';
// import Clouds from './clouds';
// import Carousel from './carousel';

const MainSection = () => {
  const [sponsor, setSponsor] = useState(false);
  const words = ['create', 'design', 'ideate', 'hack', 'build'];

  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveWordIndex((activeWordIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeWordIndex]);

  const toggleSponsor = () => {
    setSponsor(!sponsor);
  };

  return (
    <div className={styles.cloudBgContainer}>
      {/* <Clouds /> */}
      <div className={styles.mainAnimationSection}>
        <CowCone />
        <div className={styles.landing}>
          <div className={styles.mainSection}>
            <div className={styles.event}>
              <div className={styles.hackdavis}>
                HACK<strong>DAVIS</strong>{' '}
              </div>
              <div className={styles.calendar}>
                <Image src={calendar} alt="" className={styles.calendarIcon} />
                <a
                  href="https://goo.gl/maps/MTxJ6FxKH3k9DQxA6"
                  target="_blank"
                  rel="noreferrer"
                >
                  May 20, 2023 @ UCenter{' '}
                </a>
              </div>
            </div>
            <div className={styles.tagline}>
              <div className={styles.container2}>
                <span className={styles.word2}>{words[activeWordIndex]}</span>
                <span className={styles.for}>for</span>
              </div>
              <div className={styles.socialGood}> social good </div>
            </div>
          </div>

          <div className={styles.mainButton}>
            <a
              className={styles.yellowButton}
              href="https://hackdavis.typeform.com/hacker2023?utm_source=xxxxx"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>

            <button
              
              className={styles.sponsorButton }
              type="button"
            >
              <div className={styles.heartButton}>
                <Image src={heart} alt="" />
              </div>
              Sponsor
            </button>
          </div>

          <div className={styles.starterPack}>
            New Hacker? Get started with our{' '}
            <a
              href="https://hackdavis.notion.site/HackDavis-2023-Starter-Pack-33c778742f5745c7833a07255cbcc1d7"
              target="_blank"
              rel="noreferrer"
            >
              <b>Starter Pack </b>
              <Image src={arrowUp} alt="" />{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;

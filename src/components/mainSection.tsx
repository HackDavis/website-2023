/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import styles from '@/styles/mainSection.module.scss';
import Image from 'next/image';
import arrowUp from '@/images/arrowUp.svg';
import heart from '@/images/heart.svg';
// import calendar from '@/images/calendar.svg';
import cloudBg from '@/images/cloudBg.svg';
import cowCone from '@/images/cowCone.svg';
import cowHand from '@/images/cowHand.svg';
// import Carousel from './carousel';

const MainSection = () => {
  const [sponsor, setSponsor] = useState(false);
  // const [showCow, setShowCow] = useState(false);
  const words = ['create', 'design', 'ideate', 'hack', 'build'];

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  // const [previousWordIndex, setPreviousWordIndex] = useState(words.length - 1);

  useEffect(() => {
    // setShowCow(true);
    const intervalId = setInterval(() => {
      // setPreviousWordIndex(activeWordIndex);
      setActiveWordIndex((activeWordIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeWordIndex]);

  const toggleSponsor = () => {
    setSponsor(!sponsor);
  };

  // const currentWord = () => (
  //   <div className={`${styles.word} ${styles.active}`}>
  //     {words[activeWordIndex]}
  //   </div>
  // );

  return (
    <div className={styles.cloudBgContainer}>
      <div className={styles.colud2}>
        <div className={styles.cloud}>
          <Image src={cloudBg} alt="" className={styles.cloudBg} />
        </div>
      </div>
      <div className={styles.mainAnimationSection}>
        <div className={styles.cowConeContainer}>
          <Image src={cowCone} alt="" className={`${styles.cowCone}`} />

          <div className={styles.cowHandAnimate}>
            <Image src={cowHand} alt="" className={styles.cowHandImg} />
          </div>
        </div>

        <div className={styles.landing}>
          <div className={styles.mainSection}>
            {/* <div className={styles.mainSectionText}> */}

            <div className={styles.event}>
              <div className={styles.hackdavis}>
                HACK<b>DAVIS</b>{' '}
              </div>
              <br />
              <div className={styles.calendar}>
                {/* <Image  src={calendar} alt='' className={styles.calendarIcon}/>  */}
                <a href="https://google.com">May 20, 2023 @ UCenter </a>
              </div>
            </div>

            <div className={styles.tagline}>
              {/* {currentWord()} */}
              {/* <Carousel />
                                <span style={{opacity: 0.5}}>for</span> */}
              <div className={styles.container2}>
                <span className={styles.word2}>{words[activeWordIndex]}</span>
                <span style={{ opacity: 0.5, margin: 10 }}>for</span>
              </div>
              <div className={styles.socialGood}> social good </div>
            </div>
          </div>

          <div className={styles.mainButton}>
            <button className={styles.yellowButton} type="button">
              Register Now
            </button>
            <button
              onClick={toggleSponsor}
              className={sponsor ? styles.sponsorButton : styles.fadedButton}
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
            <a href="https://google.com">
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

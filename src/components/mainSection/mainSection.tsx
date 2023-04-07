import React, { useState } from 'react';
import Image from 'next/image';
import arrowUp from '@/images/arrowUp.svg';
import heart from '@/images/heart.svg';
import calendar from '@/images/calendar.svg';
import styles from '@/styles/mainSection/mainSection.module.scss';
import CowCone from './cowCone';
import WordCycle from './wordCycle';

const MainSection = () => {
  const [sponsor, setSponsor] = useState(false);

  const toggleSponsor = () => {
    setSponsor(!sponsor);
  };

  return (
    <>
      {/* <Clouds /> */}
      <div className={styles.mainAnimationSection}>
        <CowCone />
        <div className={styles.landing}>
          <div className={styles.mainSection}>
            <h1 className={styles.tagline}>
              <WordCycle />
              <span className={styles.socialGood}>social good</span>
            </h1>
            <div className={styles.event}>
              <h2 className={styles.hackdavis}>
                Hack<b>Davis</b>{' '}
              </h2>
              <div className={styles.calendar}>
                <Image src={calendar} alt="" />
                <strong>
                  May 20, 2023 @
                  <a
                    href="https://goo.gl/maps/MTxJ6FxKH3k9DQxA6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    UCenter
                  </a>
                </strong>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <a
              className={styles.yellowButton}
              href="https://hackdavis.typeform.com/hacker2023?utm_source=xxxxx"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>

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
            <a
              href="https://hackdavis.notion.site/HackDavis-2023-Starter-Pack-33c778742f5745c7833a07255cbcc1d7"
              target="_blank"
              rel="noreferrer"
            >
              <strong style={{ marginRight: 10 }}>Starter Pack</strong>
              <Image src={arrowUp} alt="" />{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;

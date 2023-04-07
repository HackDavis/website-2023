import Image from 'next/image';
import arrowUp from '@/images/arrowUp.svg';
import heart from '@/images/heart.svg';
import calendar from '@/images/calendar.svg';
import styles from '@/styles/mainSection/mainSection.module.scss';
import CowCone from './cowCone';
import WordCycle from './wordCycle';

const MainSection = () => (
  <>
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
                <a
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MW40NHJuYzFqN2xrajQxcTRrdDVnazQ4aHEgY18wODYxOGRjNTgwZmVmZjJkOGUxMzFmNDVhNGU0ODE3ZjQwMzM3NzdlZTRiOWFlZTVmY2I5NGE0MmEwNDVlNzA4QGc&tmsrc=c_08618dc580feff2d8e131f45a4e4817f4033777ee4b9aee5fcb94a42a045e708%40group.calendar.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  May 20, 2023
                </a>{' '}
                @{' '}
                <a
                  href="https://goo.gl/maps/MTxJ6FxKH3k9DQxA6"
                  target="_blank"
                  rel="noreferrer"
                >
                  UCenter
                </a>
              </strong>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <a
            className={styles.yellowButton}
            href="https://hackdavis.typeform.com/hacker2023?utm_source=WEBSITE"
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>

          <a href="mailto:team@hackdavis.io" className={styles.sponsorButton}>
            <div className={styles.heartButton}>
              <Image src={heart} alt="" />
            </div>
            Sponsor
          </a>
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

export default MainSection;

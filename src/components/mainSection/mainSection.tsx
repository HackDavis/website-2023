import styles from '@/styles/mainSection/mainSection.module.scss';
import { Heart, UpArrow } from '@/assets/mainSection/misc';
import Cow from './cow';
import WordCycle from './wordCycle';
import Clouds from './clouds';

const MainSection = () => (
  <>
    <Clouds />
    <section className={styles.wrapper}>
      <div className={styles.mainAnimationSection}>
        <Cow />
        <aside className={styles.starterPack}>
          <div className={styles.yellowCircle} />
          <span style={{ marginRight: 0 }} className={styles.links}>
            New Hacker? Get started with our{' '}
            <a
              href="https://hackdavis.notion.site/HackDavis-2023-Starter-Pack-33c778742f5745c7833a07255cbcc1d7"
              target="_blank"
              rel="noreferrer"
            >
              <strong style={{ marginRight: 10 }}> Starter Pack</strong>
              <UpArrow />
            </a>
          </span>
        </aside>
        <div className={styles.landing}>
          <div className={styles.mainSection}>
            <h1 className={styles.tagline}>
              <WordCycle />
              <span className={styles.socialGood}> social good</span>
            </h1>
            <div className={styles.event}>
              <div className={styles.hackdavis}>
                Keep an eye out for <b>HackDavis 2024</b>!!
              </div>
              {/* <h2 className={styles.hackdavis}>
                Hack<b>Davis</b>{' '}
              </h2>
              <div className={styles.calendar}>
                <Calendar />
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
              </div> */}
            </div>
          </div>

          <div className={styles.buttons}>
            {/* <a
              className={styles.yellowButton}
              href="https://hackdavis.typeform.com/hacker2023?utm_source=WEBSITE"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a> */}

            <a href="mailto:team@hackdavis.io" className={styles.sponsorButton}>
              <div className={styles.heartButton}>
                <Heart />
              </div>
              Sponsor 2024
            </a>
          </div>
          <div className={styles.applications}>
            <div style={{ marginRight: 20 }} className={styles.links}>
              <div>
                <span className={styles.text}>Register to </span>
                <a
                  href="https://hackdavis.typeform.com/volunteer2023"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong style={{ marginRight: 10 }}>Volunteer</strong>
                  <UpArrow />
                </a>
              </div>
            </div>
            <div className={styles.links}>
              <div>
                <span className={styles.text}>Apply to </span>
                <a
                  href="https://hackdavis.typeform.com/mentor2023"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong style={{ marginRight: 10 }}>Mentor</strong>
                  <UpArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default MainSection;

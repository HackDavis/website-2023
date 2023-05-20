import WordCycle from '@/components/mainSection/wordCycle';
import Clouds from '@/components/mainSection/clouds';
import styles from '@/styles/doe/mainSection.module.scss';
// import { faDiscord } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainSectionDoe = () => (
  <>
    <Clouds />
    <section className={styles.wrapper}>
      <div className={styles.mainAnimationSection}>
        <div className={styles.landing}>
          <div className={styles.mainSection}>
            <h1 className={styles.tagline}>
              <WordCycle />
              <span className={styles.socialGood}> social good</span>
            </h1>
            <div className={styles.event}>
              <h2 className={styles.hackdavis}>
                Hack<b>Davis</b>{' '}
              </h2>
              <strong>May 20-21, 2023</strong>
            </div>
          </div>

          {/* <div className={styles.buttons}>
            <div>
              <a
                className={styles.yellowButton}
                href="https://hackdavis2023.devpost.com/"
                target="_blank"
                rel="noreferrer"
              >
                Submit Project
              </a>

              <a
                href="https://discord.gg/ytge6dTe4s"
                target="_blank"
                className={styles.sponsorButton}
                rel="noreferrer"
              >
                <div className={styles.discordIcon}>
                  <FontAwesomeIcon icon={faDiscord} color="#122f40" />
                </div>
                Get Help
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  </>
);

export default MainSectionDoe;

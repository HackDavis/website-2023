import Churner from '@/components/doe/churner';
import styles from '@/styles/doe/quickstart.module.scss';
import { Map, Spotify, Safety, Notion } from '@/assets/doe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faInstagram,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

const Quickstart = () => (
  <>
    <div className={styles.container}>
      <Churner />
      <div className={styles.content}>
        <div className={styles.location}>
          <FontAwesomeIcon icon={faLocationDot} />
          <strong>
            University Credit Union Center<span> @ UC Davis</span>
          </strong>
        </div>
        <ul className={styles.tiles}>
          <li>
            <a href="#">
              <Map />
              <strong>EVENT MAP</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <Safety />
              <strong>SAFETY RESOURCES</strong>
            </a>
          </li>
          <li>
            <a
              href="https://hackdavis.notion.site/HackDavis-2023-Starter-Pack-33c778742f5745c7833a07255cbcc1d7"
              target="_blank"
              rel="noreferrer"
            >
              <Notion />
              <strong>STARTER PACK</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <Spotify />
              <strong>HACKER JAMS</strong>
            </a>
          </li>
        </ul>
        <article className={styles.socials}>
          <strong>Let&apos;s stay in touch!</strong>
          <p>Follow us on social media</p>
          <div className={styles.links}>
            <a
              className={styles.icon}
              href="https://www.linkedin.com/company/hackdavis/"
              target="_blank"
              rel="noreferrer"
              aria-label="HackDavis LinkedIn page"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className={styles.icon}
              href="https://www.instagram.com/hackdavis/"
              target="_blank"
              rel="noreferrer"
              aria-label="HackDavis Instagram page"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className={styles.icon}
              href="https://discord.gg/wc6QQEc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackDavis Discord server"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </article>
      </div>
    </div>
  </>
);

export default Quickstart;

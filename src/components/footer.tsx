import styles from '@/styles/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faMedium,
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import hdLogo from '@/images/HDLogoWhite.svg';
import hdLogoDark from '@/images/hdLogoDark.svg';

const Footer = () => (
  <footer className={styles.container}>
    {/* <Image className={styles.logo} src={hdLogo} alt="HackDavis logo" /> */}
    <Image className={styles.logo} src={hdLogoDark} alt="HackDavis logo" />
    <div className={styles.links}>
      <a className={styles.icon} href="mailto:team@hackdavis.io">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        className={styles.icon}
        href="https://medium.com/@HackDavis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a
        className={styles.icon}
        href="https://www.facebook.com/HackDavis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        className={styles.icon}
        href="https://twitter.com/hack_davis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className={styles.icon}
        href="https://www.instagram.com/hackdavis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className={styles.icon}
        href="https://discord.gg/wc6QQEc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faDiscord} />
      </a>
    </div>
    <p className={styles.copyright}>
      &copy; 2023 HackDavis • Made with ☕️ & 💛 in Davis
    </p>
  </footer>
);

export default Footer;

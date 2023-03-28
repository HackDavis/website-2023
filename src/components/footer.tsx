import React from "react";
import styles from "@/styles/footer.module.scss";
// import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import LogoIcon from "../images/HDLogoWhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMedium, faFacebookF, faTwitter, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerCont}>
      <footer className={styles.footerstyle}>
        <div id={styles["footer-content"]}>
          <div className={styles.logoCont}>
            <Image className={styles.logo} src={LogoIcon} alt=""/>
          </div>
          <br></br>
          <a className={styles.smallbutton1} href="mailto:team@hackdavis.io">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{color: "#ffffff",}}
            />
          </a>
          <a
            className={styles.smallbutton1}
            href="https://medium.com/@HackDavis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon 
              icon={faMedium} 
              style={{ color: "#ffffff" }} 
            />
          </a>
          <a
            className={styles.smallbutton1}
            href="https://www.facebook.com/HackDavis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",}} />

          </a>
          <a
            className={styles.smallbutton1}
            href="https://twitter.com/hack_davis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
          </a>
          <a
            className={styles.smallbutton1}
            href="https://www.instagram.com/hackdavis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
          </a>
          <a
            className={styles.smallbutton1}
            href="https://discord.gg/wc6QQEc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} style={{color: "#ffffff",}} />
          </a>
        </div>
        <div id={styles.copyright}>
          <span>&copy; 2022 HackDavis • Made with ☕️ & 💛 in Davis</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

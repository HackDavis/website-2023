import React, { useState } from "react";
import styles from "@/styles/navbarDesktop.module.scss";
import HDLogo from "../images/HDLogo2.svg";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";
import badge from "../images/MLHBadge.svg";
import Image from "next/image";

function NavbarDesktop() {
  const [isLight, setLight] = useState(true);
  function toggleLight() {
    setLight(!isLight);
  }
  return (
    <div className={styles.navbarCont}>
      <div className={styles.navLogo}>
        <Image src={HDLogo} alt="" />
      </div>
      <div className={styles.navLinks}>
        <div className={styles.navLinkHome}> Home </div>
        <div className={styles.navLinkAboutUs}> About Us </div>
        <div
          className={isLight ? styles.lightPill : styles.darkPill}
          onClick={toggleLight}
        >
          <div className={isLight ? styles.darkCircle : styles.lightCircle}>
            <Image
              className={isLight ? styles.moonIcon : styles.sunIcon}
              src={isLight ? moon : sun}
              alt=""
            />
          </div>
        </div>

      </div>

      <div className={styles.navLinkBadge}>
        <Image src={badge} alt="" />
      </div>
    </div>
  );
}

export default NavbarDesktop;

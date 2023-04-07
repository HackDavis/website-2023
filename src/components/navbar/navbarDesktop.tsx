import React, { useState, useEffect } from "react";
import styles from "@/styles/navbar/navbarDesktop.module.scss";
import Image from "next/image";
import HDLogo from "@/images/HDLogo.svg";
// import moon from '../images/moon.svg';
// import sun from '../images/sun.svg';
import badge from "@/images/MLHBadge.svg";
import Link from "next/link";

const NavbarDesktop = () => {
  const [atHome, setAtHome] = useState(true);
  const [atAbout, setAtAbout] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const setNavbarLogo = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setNavbarLogo);
    return () => {
      window.removeEventListener("scroll", setNavbarLogo);
    };
  }, []);
  // const [isLight, setLight] = useState(true);

  // const toggleLight = () => {
  //   setLight(!isLight);
  // };
  return (
    <div
      className={`${styles.navbarCont} ${
        isScroll ? `${styles.showShadow}` : ""
      }`}
    >
      <div
        className={`${styles.navbarItems} ${
          isScroll ? `${styles.navbarItemsOnScroll}` : ""
        }`}
      >
        <a href="/">
          <Image src={HDLogo} alt="" />
        </a>
        <div className={styles.navLinks}>
          <Link
            className={atHome ? styles.selected : styles.unselected}
            href="/"
            onClick={() => {
              setAtHome(true);
              setAtAbout(false);
            }}
          >
            Home
          </Link>
          <Link
            className={atAbout ? styles.selected : styles.unselected}
            href="/about"
            onClick={() => {
              setAtHome(false);
              setAtAbout(true);
            }}
          >
            About Us
          </Link>
          {/* <button
          className={isLight ? styles.lightPill : styles.darkPill}
          onClick={toggleLight}
          type="button"
        >
          <div className={isLight ? styles.darkCircle : styles.lightCircle}>
            <Image
              className={isLight ? styles.moonIcon : styles.sunIcon}
              src={isLight ? moon : sun}
              alt=""
            />
          </div>
        </button> */}
          <a href="https://mlh.io/seasons/2023/events" target="_blank">
            <Image
              className={`${isScroll ? `${styles.adjustMLH}` : ""}`}
              src={badge}
              alt="MLH Banner"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;

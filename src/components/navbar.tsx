import React, { useState } from "react";
import styles from "@/styles/navbar.module.scss";
import HDLogo from "../images/HDLogo2.svg";
import MLHBadge from "../images/MLHBadge.svg";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";
import hamburger from "../images/hamburger.svg";
import Image from "next/image";

const Navbar = () => {
  const [isLight, setIsLight] = useState(false);
  function toggleLight() {
    setIsLight(!isLight);
  }
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

//   const hamburger = document.querySelector(".hamburger")!;
//   const navMenu = document.querySelector(".nav-menu")!;

//   hamburger.addEventListener("click", mobileMenu);

//   function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//   }

  return (
    <div className={styles.navbarCont}>
        <div className={styles.navLogo}>
            <Image src={HDLogo} alt="" />
        </div>
        <div className={styles.mlhBadge}>
            <Image src={MLHBadge} alt="" />
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
    
        <div className={styles.hamburger} onClick={toggleHamburger}>
            <Image className={styles.hamburgerIcon} src={hamburger} alt="" />
        </div>

        <style jsx> {`
            .navLinks div {
                display: ${hamburgerOpen ? 'inline' : 'none'};
                flex-direction: column;
            }
        `}</style>

    {/* TODO: make hamburger open on click */}
      {/* <div className={isHamburger ? styles.hamburger : styles.navLinks}>
        <Image
            className={isHamburger ? styles.hamburgerIcon : ''}
            src={isHamburger ? hamburger : ''}
            alt=""
          />
      </div> */}
    </div>
  );
};

export default Navbar;

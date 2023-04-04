import React, { useState, useEffect } from 'react';
import styles from "@/styles/navbarMobile.module.scss";
import Hamburger from "../images/hamburger.svg";
import MLHBanner from "../images/MLHBadge.svg";
import LogoIcon from "../images/HDLogo2.svg";
import { Link } from "react-router-dom";
import Image from "next/image";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(true);

  const setNavbarLogo = () => {
    if(window.scrollY > 0) {
      setLogo(false);
    } else {
      setLogo(true);
    }
  };
  useEffect(()=> {
    window.addEventListener('scroll', setNavbarLogo);
    return () => {
      window.removeEventListener('scroll', setNavbarLogo);
    };
  }, []);

  return (
    <>
      <a href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white" target="_blank"><Image src={MLHBanner} alt = '' className={`${logo ? "" : `${styles.hide}`} ${isOpen ? `${styles.hide}` : ""} ${styles.mlhbanner}`}/></a>
      <div className={`d-flex justify-content-between align-items-center ${logo ? "" : isOpen ? "" : `${styles.scroll}`} ${styles.container}`}>
        { logo ?
          isOpen ? <Link to="/"><Image src={LogoIcon} alt = '' className={styles.logo} /></Link>: <div className={styles.logo}/> 
          : <Link to="/"><Image src={LogoIcon} alt = '' className={styles.logo} /></Link>
        }
        <Image className={styles.hamburger} src={Hamburger} alt = '' onClick={() => setIsOpen(!isOpen)}/>
      </div>
        {/* <div className={`${styles.menuNav} ${isOpen ? `${styles.showMenu}` : ""}`}> */}
        <div className={isOpen ? styles.showMenu + " " + styles.menuNav : styles.hideMenu}>
        {/* className={isLight ? styles.lightPill : styles.darkPill} */}

          <div className={styles.buttons}>
            <p>Home</p>
            <p>About Us</p>
            {/* <p><Link to="/" className={`${window.location.href == `${window.location.origin}/` ? `${styles.bold_navitem}`: `${styles.button}`}`} >Homepage</Link></p>
            <p><Link to="/about" className={`${window.location.href == `${window.location.origin}/about` ? `${styles.bold_navitem}`: `${styles.button}`}`}>About us</Link></p>
            <p><a href='https://merch.hackdavis.io/' target="_blank" className={`${styles.button} ${window.location.href == `https://merch.hackdavis.io/` ? `${styles.bold_navitem}` : `${styles.button}`}`}>Merch Store</a></p> */}
            {/* <a className={styles.button} href="">Dashboard</a> */}
          </div>
        </div>
      <div className={isOpen ? styles.removeBg : styles.addBg}/>
    </>
  );
};

export default NavbarMobile;
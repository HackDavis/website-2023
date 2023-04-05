import React, { useState, useEffect } from 'react';
import styles from '@/styles/navbarMobile.module.scss';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import Hamburger from '../images/hamburger.svg';
import Badge from '../images/MLHBadge.svg';
import HDLogo from '../images/HDLogo2.svg';

const NavbarMobile = () => {
  const [open, setopen] = useState(false);
  const [atHome, setatHome] = useState(true);
  const [atAbout, setatAbout] = useState(false);

  return (
    <div className={styles.navbarCont}>
      <div className={styles.navbarItems}>
        {/* badge */}
        <Image
          className={styles.badge}
          id={styles.badgeImage}
          src={Badge}
          alt=""
        />

        {/* hamburger */}
        <div
          className={styles.hamburger}
          onClick={() => {
            setopen(!open);
          }}
        >
          <Image src={Hamburger} alt="" />
        </div>
      </div>

      <div
        className={styles.navMenu}
        id={open ? styles.openMenu : styles.closeMenu}
      >
        <ul>
          <li
            onClick={() => {
              setatHome(true);
              setatAbout(false);
            }}
          >
            <a className={atHome ? styles.bold : styles.normal} href="/">
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setatHome(false);
              setatAbout(true);
            }}
          >
            <a className={atAbout ? styles.bold : styles.normal} href="/about">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;

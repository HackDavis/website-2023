import React, { useState } from 'react';
import styles from '@/styles/navbar/navbarMobile.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '@/images/hamburger.svg';
import Badge from '@/images/MLHBadge.svg';

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
        <button
          className={styles.hamburger}
          onClick={() => {
            setopen(!open);
          }}
          type="button"
        >
          <Image src={Hamburger} alt="" />
        </button>
      </div>

      <div
        className={styles.navMenu}
        id={open ? styles.openMenu : styles.closeMenu}
      >
        <ul>
          <li>
            <Link
              className={atHome ? styles.bold : styles.normal}
              href="/"
              onClick={() => {
                setatHome(true);
                setatAbout(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={atAbout ? styles.bold : styles.normal}
              href="/about"
              onClick={() => {
                setatHome(false);
                setatAbout(true);
              }}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;

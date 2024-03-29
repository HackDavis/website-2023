import React, { useEffect, useState } from 'react';
import styles from '@/styles/navbar/navbarMobile.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/images/mlhBadge.svg';
import HDLogo from '@/images/HDLogo.svg';
// import { Hamburger } from '@/assets/navbar';

const NavbarMobile = () => {
  // const [open, setOpen] = useState(false);
  // const [atHome, setAtHome] = useState(true);
  // const [atAbout, setAtAbout] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const setNavbarLogo = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setNavbarLogo);

    return () => {
      window.removeEventListener('scroll', setNavbarLogo);
    };
  }, []);

  return (
    <div
      className={`${styles.navbarCont} ${
        isScroll ? `${styles.showShadow}` : ''
      }`}
    >
      <div
        className={`${styles.navbarItems} ${
          isScroll ? `${styles.navbarItemsOnScroll}` : ''
        }`}
      >
        {/* badge */}
        {isScroll ? (
          <Link href="/">
            <Image
              className={`${isScroll ? `${styles.showLogo}` : ''}`}
              src={HDLogo}
              alt="HackDavis Logo"
            />
          </Link>
        ) : (
          <Link
            href="https://mlh.io/seasons/2023/events"
            target="_blank"
            rel="noreferrer"
          >
            <Image className={styles.badge} src={Badge} alt="MLH Banner" />
          </Link>
        )}
        {/* hamburger */}
        {/* <button
          className={styles.hamburger}
          onClick={() => {
            setOpen(!open);
          }}
          type="button"
        >
          <Hamburger />
        </button> */}
      </div>

      {/* <div
        className={`${styles.navMenu} ${
          open ? `${styles.navMenuAnimation}` : ""
        } ${open && isScroll ? styles.navMenuOnScroll : ""}`}
        id={open ? styles.openMenu : ""}
      >
        <ul>
          <li>
            <Link
              className={atHome ? styles.selected : styles.unselected}
              href="/"
              onClick={() => {
                setAtHome(true);
                setAtAbout(false);
                setOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={atAbout ? styles.selected : styles.unselected}
              href="/about"
              onClick={() => {
                setAtHome(false);
                setAtAbout(true);
                setOpen(false);
              }}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default NavbarMobile;

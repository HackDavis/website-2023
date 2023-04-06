import React from 'react';
import styles from '@/styles/navbar/navbarDesktop.module.scss';
import Image from 'next/image';
import HDLogo from '@/images/HDLogo2.svg';
// import moon from '../images/moon.svg';
// import sun from '../images/sun.svg';
import badge from '@/images/MLHBadge.svg';

const NavbarDesktop = () => (
  // const [isLight, setLight] = useState(true);

  // const toggleLight = () => {
  //   setLight(!isLight);
  // };

  <div className={styles.navbarCont}>
    <div className={styles.navLogo}>
      <Image src={HDLogo} alt="" />
    </div>
    <div className={styles.navLinks}>
      <div className={styles.navLinkHome}> Home </div>
      <div className={styles.navLinkAboutUs}> About Us </div>
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
    </div>

    <div className={styles.navLinkBadge}>
      <Image src={badge} alt="" />
    </div>
  </div>
);

export default NavbarDesktop;

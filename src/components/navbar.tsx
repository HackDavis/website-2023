import React, { useState } from "react";
import styles from "@/styles/navbar.module.scss";
import HDLogo from "../images/HDLogo2.svg";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";
import Image from "next/image";

// import styles from "@/styles/navbar.module.css";
// import React, { useState } from "react";
// import sun from "../public/images/sun.svg";
// import moon from "../public/images/moon.svg";
// import HDLogo from "../public/images/HDLogo2.svg"
// import Image from "next/image";

function Navbar() {
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
    </div>
  );
}

// export { Navbar };


// const Navbar = () => {
//   const [isLight, setLight] = useState(false);
//   const toggleLight = () => {
//     setLight(!isLight);
//   }
//   return (
//     <div className={styles.navbarCont}>
//       <div className={styles.navLogo}>
//         <Image src={HDLogo} alt="" />
//       </div>
//       <div className={styles.navLinks}>
//         <div className={styles.navLinkHome}> Home </div>
//         <div className={styles.navLinkAboutUs}> About Us </div>

//         <div className={isLight ? styles.lightPill : styles.darkPill} onClick={toggleLight}>
//           <div className={isLight ? styles.darkCircle : styles.lightCircle}>
//             <Image
//               className={isLight ? styles.moonIcon : styles.sunIcon}
//               src={isLight ? moon : sun}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Navbar;

import React from 'react'
import styles from '@/styles/navbar.module.scss'
import HDLogo from '../images/HDLogo2.svg'
import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'
import Image from 'next/image'

const Navbar = () => {
    return(
        <div className={styles.navbarCont}>
            <div className={styles.navLogo}>
                <Image src={HDLogo} alt=''/>
            </div>
            <div className={styles.navLinks}>
                <div className={styles.navLinkHome}> Home </div>
                <div className={styles.navLinkAboutUs}> About Us </div>

                <div className={styles.switchCont}>
                    <div className={styles.switchButton}>
                        <input className={styles.checkbox} type="checkbox" id="switch" />
                        <label className={styles.toggle} htmlFor="switch">
                            <Image className={styles.moonIcon} src={Moon} alt=''/>
                            <Image className={styles.sunIcon} src={Sun} alt=''/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
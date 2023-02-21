import React from 'react'
import styles from '@/styles/navbar.module.scss'
import HDLogo from '../images/HDLogo2.svg'
import Image from 'next/image'

const Navbar = () => {
    return(
        <div className={styles.navbarCont}>
            <div className={styles.navLogo}>
                <Image src={HDLogo} alt=''/>
            </div>
            <div className={styles.navLinks}>
                <div> Home </div>
                <div> About Us </div>
                <div>  
                    <label className={styles.switch}>
                        <input type="checkbox"/>
                        <span className={styles.sliderRound}></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Navbar
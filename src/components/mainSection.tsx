import React, { useState } from 'react'
import styles from '@/styles/mainSection.module.scss'
import Image from 'next/image'
import arrowUp from '@/images/arrowUp.svg'
import heart from '@/images/heart.svg'
import calendar from '@/images/calendar.svg'

const MainSection = () => {
    const [sponsor, setSponsor] = useState(false);

    const toggleSponsor = () => {
        setSponsor(!sponsor);
    }
    return(
        <div className={styles.landing}>
            {/* <div>
                cow on icecream img
            </div> */}
            <div className={styles.mainSection}>
                {/* <div className={styles.mainSectionText}> */}

                    <div className={styles.event}>
                        <div className={styles.hackdavis}>HACK<b>DAVIS</b> </div>
                            <br />
                        <div className={styles.calendar}>
                            <Image  src={calendar} alt='' className={styles.calendarIcon}/> 
                            <a href ="https://google.com" >May 20, 2023 @ UCenter </a> 
                        </div>
                    </div>

                    <div className={styles.tagline}>
                        create for <br /> <div className={styles.socialGood}> social good </div> 
                    </div>

                {/* </div> */}
            </div>
                <div className={styles.mainButton}>
                    <button className={styles.yellowButton}>
                        Register Now
                    </button>
                    {/* <button className={styles.heartButton}>
                        <Image src={heart} alt='' /> 
                    </button> Sponsor */}
                    <div onClick={toggleSponsor} className={sponsor ? styles.sponsorButton : styles.fadedButton}>
                        <div className={styles.heartButton}>
                            <Image src={heart} alt='' /> 
                        </div> 
                        Sponsor
                    </div>
                </div>

                <div className={styles.starterPack}>
                New Hacker? Get started with our <a href="https://google.com"><b>Starter Pack  </b>  
                    <Image src={arrowUp} alt='' /> </a>
                </div>
        </div>
    )
}

export default MainSection
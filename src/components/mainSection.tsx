import React from 'react'
import styles from '@/styles/mainSection.module.scss'
import Image from 'next/image'
import arrowUp from '@/images/arrowUp.svg'
import heart from '@/images/heart.svg'
import calendar from '@/images/calendar.svg'

const MainSection = () => {
    return(
        <div className={styles.landing}>
            <div>
                cow on icecream img
            </div>
            <div className={styles.mainSection}>
                <div className={styles.event}>
                    <div className={styles.hackdavis}>HACK<b>DAVIS</b> </div>
                        <br />
                    <div className={styles.calendar}>
                        <Image  src={calendar} alt='' /> 
                        <a href ="https://google.com" >May 20, 2023 @ UCenter </a> 
                    </div>
                </div>
                <div className={styles.tagline}>
                    create for <br /> <div className={styles.socialGood}> social good </div> 
                </div>
                <div className={styles.mainButton}>
                    <button>
                        Register Now
                    </button>
                    {/* <button className={styles.heartButton}>
                        <Image src={heart} alt='' /> 
                    </button> Sponsor */}
                    {/* <div className="toggle-switch">
                        <input
                        type="checkbox"
                        className="toggle-switch-checkbox"
                        name="toggleSwitch"
                        id="toggleSwitch"
                        />
                        <label className="toggle-switch-label" htmlFor="toggleSwitch">
                            <span className="toggle-switch-inner" />
                            <span className="toggle-switch-switch" />
                        </label>
                    </div> */}
                    <div>

                    </div>
                </div>
                <div className={styles.starterPack}>
                    Get started with our <a href="https://google.com"><b>Starter Pack  </b>  
                    <Image src={arrowUp} alt='' /> </a>
                </div>
            </div>
        </div>
    )
}

export default MainSection
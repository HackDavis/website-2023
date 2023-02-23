import React from 'react'
import styles from '@/styles/mainSection.module.scss'
import Image from 'next/image'
import arrowUp from '@/images/arrowUp.svg'
import heart from '@/images/heart.svg'
import calendar from '@/images/calendar.svg'

const MainSection = () => {
    return(
        <div className={styles.mainSection}>
            <div>
                cow on icecream img
            </div>
            <div>

                <div className={styles.tagline}>
                    

                        create for <br /> <div className={styles.socialGood}> social good </div>
                    
                </div>
                <div className={styles.event}>
                    
                        <div className={styles.hackdavis}>HACK<b>DAVIS</b> </div>
                         <br />
                        <Image src={calendar} alt='' /> May 20, 2023 @ UCenter
                    
                </div>
                <div className={styles.mainButton}>
                    <button>
                        Register Now
                    </button>
                    <button className={styles.heartButton}>
                        <Image src={heart} alt='' /> 
                    </button> Sponsor
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
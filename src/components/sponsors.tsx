import styles from "@/styles/sponsors.module.scss"

const Sponsors = () => {
    return(
        <div className={styles.busContainer}>
            <div className={styles.bus}>
                <div className={styles.window}>
                    SPONSORS
                </div>
                <div className={styles.back}>
                    <div className={styles.backLights}>
                        <div className={styles.circleLight}></div>
                        <div className={styles.elipseLight}></div>
                    </div>
                    <div className={styles.sponsorsContainer}>

                    </div>
                    <div className={styles.backLights}>
                    <div className={styles.circleLight}></div>
                        <div className={styles.elipseLight}></div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.plate}>
                    I &lt;3 HD
                </div>
            </div>
            <div className={styles.wheels}>
                <div className={styles.wheel}></div>
                <div className={styles.wheel}></div>
            </div>
        </div>
    )
}

export default Sponsors
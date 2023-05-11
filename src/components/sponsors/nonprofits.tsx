import styles from '@/styles/sponsors/nonprofits.module.scss';
import Marquee from './marquee';
import Logo from './logo';
import awhc from '@/images/nonprofits/awhc.png'
import awhc2 from '@/images/nonprofits/awhc2.svg'
import reuse from '@/images/nonprofits/reuse.png'
import treedavis from '@/images/nonprofits/treedavis.png'

const NonProfits = () => {
    return (
        <section id="non-profits" className={styles.nonprofitsSection}>
            <h2 className={styles.support}>support our non-profits.</h2>
            <div className={styles.nonprofitsContainer}>
                <Marquee iterations={2} duration={50}>
                    <Logo imgSrc={reuse} 
                        url="https://aggiereuse.ucdavis.edu/" 
                        alt="ASUCD The Aggie Reuse Store Logo" />
                    <Logo
                    imgSrc={treedavis}
                    url="https://www.treedavis.org/"
                    alt="Tree Davis Logo"
                    />
                    <Logo
                    imgSrc={awhc2}
                    url="https://www.americanwildhorsecampaign.org/"
                    alt="American Wild Horse Campaign Logo"
                    />
                </Marquee>
            
            </div>
        </section>
    )
}

export default NonProfits
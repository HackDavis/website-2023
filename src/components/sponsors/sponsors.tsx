import { Heart } from '@/assets/mainSection/misc';
import chevron from '@/images/sponsors/chevron.png';
import cs from '@/images/sponsors/cs.png';
import globalAffairs from '@/images/sponsors/globalaffairs.png';
import iet from '@/images/sponsors/iet.png';
import dataLab from '@/images/sponsors/datalab.png';
import ssc from '@/images/sponsors/ssc.png';
import ls from '@/images/sponsors/ls.png';
import asucd from '@/images/sponsors/asucd.png';
import pocky from '@/images/sponsors/pocky.svg';
import yakult from '@/images/sponsors/yakult.png';
import pepsi from '@/images/sponsors/pepsi.png';
import cfc from '@/images/sponsors/cfc.png';
import styles from '@/styles/sponsors/sponsors.module.scss';
import Marquee from './marquee';
import Logo from './logo';

const Sponsors = () => (
  <div className={styles.sponsorsSection}>
    <div className={styles.heartButton}>
      <Heart />
    </div>
    <h2 className={styles.support}>support for social good.</h2>
    <div className={styles.sponsorsContainer}>
      <Marquee duration={50}>
        <Logo imgSrc={chevron} url="http://chevron.com/" alt="Chevron Logo" />
        <Logo
          imgSrc={cs}
          url="http://cs.ucdavis.edu/"
          alt="UC Davis Computer Science Logo"
        />
        <Logo
          imgSrc={globalAffairs}
          url="http://globalaffairs.ucdavis.edu/"
          alt="UC Davis Global Affairs Logo"
        />
        <Logo
          imgSrc={iet}
          url="http://iet.ucdavis.edu/"
          alt="UC Davis Information and Educational Technology Logo"
        />
      </Marquee>
      <Marquee reverse duration={70}>
        <Logo
          imgSrc={dataLab}
          url="http://datalab.ucdavis.edu/"
          alt="UC Davis DataLab Logo"
        />
        <Logo
          imgSrc={ssc}
          url="http://startup.ucdavis.edu/"
          alt="UC Davis Student Startup Center Logo"
        />
        <Logo
          imgSrc={ls}
          url="http://ls.ucdavis.edu/"
          alt="UC Davis College of Letters and Science Logo"
        />
        <Logo
          imgSrc={asucd}
          url="http://asucd.ucdavis.edu/"
          alt="Associated Students, UC Davis (ASUCD) Logo"
        />
        <Logo
          imgSrc={cfc}
          url="http://csi.ucdavis.edu/cfc"
          alt="UC Davis Club Finance Council Logo"
        />
      </Marquee>
      <Marquee iterations={2} duration={50}>
        <Logo imgSrc={pocky} url="http://pocky.com/" alt="Pocky Logo" />
        <Logo imgSrc={yakult} url="http://yakultusa.com/" alt="Yakult Logo" />
        <Logo imgSrc={pepsi} url="http://pepsi.com/" alt="Pepsi Logo" />
      </Marquee>
    </div>
  </div>
);

export default Sponsors;
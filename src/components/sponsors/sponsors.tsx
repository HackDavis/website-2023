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
import cfc from '@/images/sponsors/cfc.jpg';
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
      <Marquee iterations={2} duration={50}>
        <Logo imgSrc={chevron} alt="Chevron Logo" />
        <Logo imgSrc={cs} alt="UC Davis Computer Science Logo" />
        <Logo imgSrc={globalAffairs} alt="UC Davis Global Affairs Logo" />
        <Logo
          imgSrc={iet}
          alt="UC Davis Information and Educational Technology Logo"
        />
      </Marquee>
      <Marquee reverse iterations={2} duration={70}>
        <Logo imgSrc={dataLab} alt="UC Davis DataLab Logo" />
        <Logo imgSrc={ssc} alt="UC Davis Student Startup Center Logo" />
        <Logo imgSrc={ls} alt="UC Davis College of Letters and Science Logo" />
        <Logo imgSrc={asucd} alt="Associated Students, UC Davis (ASUCD) Logo" />
        <Logo imgSrc={cfc} alt="UC Davis Club Finance Council Logo" />
      </Marquee>
      <Marquee iterations={2}>
        <Logo imgSrc={pocky} alt="Pocky Logo" />
        <Logo imgSrc={yakult} alt="Yakult Logo" />
        <Logo imgSrc={pepsi} alt="Pepsi Logo" />
      </Marquee>
    </div>
  </div>
);

export default Sponsors;

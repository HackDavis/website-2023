import Image from 'next/image';
import cloudBg from '@/images/cloudBg.svg';
import { MainSectionClouds } from '@/assets/mainSection';
import styles from '@/styles/mainSection/clouds.module.scss';

const Clouds = () => (
  <Image src={cloudBg} alt="" className={styles.cloud} />
  // <MainSectionClouds className={styles.cloud} />
);

export default Clouds;

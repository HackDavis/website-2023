import Image from 'next/image';
import cloudBg from '@/images/cloudBg.svg';
import styles from '@/styles/clouds.module.scss';

const Clouds = () => (
  <div className={styles.container}>
    <Image src={cloudBg} alt="" className={styles.cloudBg} />
  </div>
);

export default Clouds;

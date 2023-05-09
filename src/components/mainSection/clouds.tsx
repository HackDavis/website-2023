import {
  CloudLarge,
  CloudMedium1,
  CloudMedium2Light,
  CloudSmallLight,
} from '@/assets/mainSection/clouds';
import styles from '@/styles/mainSection/clouds.module.scss';

const Clouds = () => (
  <div className={styles.container}>
    <CloudLarge />
    <CloudMedium1 />
    <CloudMedium2Light />
    <CloudSmallLight />
  </div>
);

export default Clouds;

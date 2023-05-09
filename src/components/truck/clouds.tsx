import styles from '@/styles/truck/clouds.module.scss';
import { CloudSet1, CloudSet2 } from '@/assets/truck/clouds';
import Marquee from '../sponsors/marquee';

const Clouds = () => (
  <div className={styles.container}>
    <Marquee reverse duration={10}>
      <CloudSet1 />
      <CloudSet2 />
    </Marquee>
  </div>
);

export default Clouds;

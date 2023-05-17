import { CowCone, CowHand } from '@/assets/mainSection/cow';
import styles from '@/styles/mainSection/cow.module.scss';

const Cow = () => (
  <div className={styles.container}>
    <CowHand />
    <CowCone />
  </div>
);

export default Cow;

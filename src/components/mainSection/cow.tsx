import styles from '@/styles/mainSection/cowCone.module.scss';
import { CowCone, CowHand } from '@/assets/mainSection/cow';

const Cow = () => (
  <div className={styles.container}>
    <CowHand />
    <CowCone />
  </div>
);

export default Cow;

import styles from '@/styles/mainSection/cowCone.module.scss';
import Image from 'next/image';
import cowCone from '@/images/cowCone.svg';
import { CowConeFull } from '@/assets/mainSection/cow';
// import cowHand from '@/images/cowHand.svg';

const Cow = () => (
  <div className={styles.container}>
    {/* <Image
      src={cowCone}
      alt="cow behind an ice cream cone"
      className={styles.cowCone}
    /> */}
    <CowConeFull />
    {/* <div className={styles.cowHandAnimate}>
      <Image src={cowHand} alt="" className={styles.cowHandImg} />
    </div> */}
  </div>
);

export default Cow;

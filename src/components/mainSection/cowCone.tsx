import styles from '@/styles/mainSection/cowCone.module.scss';
import Image from 'next/image';
import cowCone from '@/images/cowCone.svg';
// import cowHand from '@/images/cowHand.svg';

const CowCone = () => (
  <div className={styles.cowConeContainer}>
    <Image src={cowCone} alt="" className={styles.cowCone} />
    {/* <div className={styles.cowHandAnimate}>
      <Image src={cowHand} alt="" className={styles.cowHandImg} />
    </div> */}
  </div>
);

export default CowCone;

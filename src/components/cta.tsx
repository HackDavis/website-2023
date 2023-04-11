import styles from '@/styles/cta.module.scss';
import iceCreamSprinkles from '@/images/iceCreamSprinkles.svg';
import Image from 'next/image';

const Cta = () => (
  <>
    <section className={styles.container}>
      <div className={styles.top}>
        <Image src={iceCreamSprinkles} alt="" />
      </div>
      <div className={styles.block}>
        <p>
          <strong>Sprinkle in your flair</strong>
        </p>
        <a
          href="https://hackdavis.typeform.com/hacker2023?utm_source=WEBSITE"
          target="_blank"
          rel="noreferrer"
        >
          Register Now
        </a>
      </div>
    </section>
    <div className={styles.drips}>
      <div className={styles.drip} />
      <div className={styles.drip} />
      <div className={styles.drip} />
      <div className={styles.drip} />
      <div className={styles.drip} />
      <div className={styles.drip} />
    </div>
    <div className={styles.filler} />
  </>
);

export default Cta;

import styles from '@/styles/cta.module.scss';
import { IceCreamSprinkles } from '@/assets/cta/iceCream';

const Cta = () => (
  <>
    <section className={styles.container}>
      <div className={styles.top}>
        <IceCreamSprinkles />
      </div>
      <div className={styles.block}>
        <p>
          <strong>Sprinkle in your flair</strong>
        </p>
        <a
          href="https://hackdavis2023.devpost.com/"
          target="_blank"
          rel="noreferrer"
        >
          Submit Project
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

import styles from '@/styles/doe/prizes.module.scss';
import PrizeCard from './prizeCard';
import prizeList, { leftColumnPrizes, rightColumnPrizes } from './prizeInfo';

const Prizes = () => (
  <section id="prizes" className={styles.container}>
    <h1>Prizes</h1>
    <strong>
      <b>$17,840</b> in prizes
    </strong>
    <div className={styles.note}>
      <div />
      <p>Each member of a winning team receives the listed prize(s)</p>
    </div>
    <div className={styles.prizesContainerMobile}>
      <ul>
        {prizeList.map((prize) => (
          <PrizeCard key={prize.categoryName} prize={prize} />
        ))}
      </ul>
    </div>
    <div className={styles.prizesContainer}>
      <PrizeCard key={prizeList[0].categoryName} prize={prizeList[0]} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ul style={{ marginRight: '10px', width: 'calc(50% - 10px)' }}>
          {leftColumnPrizes.map((prize) => (
            <PrizeCard key={prize.categoryName} prize={prize} />
          ))}
        </ul>
        <ul style={{ marginLeft: '10px', width: 'calc(50% - 10px)' }}>
          {rightColumnPrizes.map((prize) => (
            <PrizeCard key={prize.categoryName} prize={prize} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Prizes;

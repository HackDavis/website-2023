import React, { useState } from 'react';
import styles from '@/styles/doe/prizeCard.module.scss';
import { BannerTrophy, BannerTrophyFilled, PrizeTrophy } from '@/assets/doe';
import { Prize } from './prizeInfo';
import AccordionItem from './accordionItem';

interface PrizeCardOptions {
  prize: Prize;
}

const PrizeCard = ({ prize }: PrizeCardOptions) => {
  const [open, setOpen] = useState(false);

  const {
    categoryName,
    sponsor,
    prizePreview,
    prizeFull,
    criteria,
    highlight,
  } = prize;

  return (
    <li className={`${styles.container} ${highlight ? styles.highlight : ''}`}>
      <div
        className={`${styles.cardHeading} ${highlight ? styles.highlight : ''}`}
      >
        <h3>{categoryName}</h3>
        {highlight ? <BannerTrophy /> : <BannerTrophyFilled />}
      </div>
      <div className={styles.prizeInfo}>
        {sponsor && (
          <p className={styles.sponsor}>
            Sponsored by <strong>{sponsor}</strong>
          </p>
        )}
        {prizePreview ? (
          <button
            type="button"
            style={{ cursor: ' pointer', backgroundColor: 'transparent' }}
            className={
              open
                ? `${styles.previewButton}`
                : `${styles.previewButton} ${styles.description}`
            }
            onClick={() => setOpen(!open)}
          >
            {open ? (
              prizeFull.map((prizeItem, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className={styles.description} key={idx}>
                  <PrizeTrophy />
                  <p>{prizeItem}</p>
                </div>
              ))
            ) : (
              // eslint-disable-next-line no-undefined
              <div
                style={{ marginBottom: 0 }}
                className={
                  open
                    ? `${styles.description} ${styles.prizeFadeIn}`
                    : styles.description
                }
              >
                <PrizeTrophy />
                <p>{prizePreview[0]}</p>
              </div>
            )}
          </button>
        ) : (
          prizeFull.map((prizeItem, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx} className={styles.description}>
              <PrizeTrophy />
              <p>{prizeItem}</p>
            </div>
          ))
        )}
        <AccordionItem criteria={criteria} />
      </div>
    </li>
  );
};

export default PrizeCard;

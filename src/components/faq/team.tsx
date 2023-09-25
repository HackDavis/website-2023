import React, { useState } from 'react';
import styles from '@/styles/faq/faq.module.scss';
import teamDescriptions from './teamDescriptions';
import AccordionItem from './accordionItem';

const Team = () => {
  const [openedIndex, setOpenedIndex] = useState(-1);

  return (
    <section
      id="faq"
      style={{ paddingBottom: 0 }}
      className={styles.faqContainer}
    >
      <div className={styles.faqContent}>
        <h2>
          <center>Team Descriptions</center>
        </h2>
        <ul className={styles.questionList}>
          {teamDescriptions.map(({ team, description }, index) => (
            <AccordionItem
              key={team}
              itemIndex={index}
              openedIndex={openedIndex}
              setOpenedIndex={setOpenedIndex}
              question={team}
              answer={description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;

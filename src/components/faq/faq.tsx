import React, { useState } from 'react';
import styles from '@/styles/faq/faq.module.scss';
import questionsAndAnswers from './questionsAndAnswers';
import AccordionItem from './accordionItem';

const Faq = () => {
  const [openedIndex, setOpenedIndex] = useState(-1);

  return (
    <section id="faq" className={styles.faqContainer}>
      <div className={styles.faqContent}>
        <h2>FAQ</h2>
        <ul className={styles.questionList}>
          {questionsAndAnswers.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              itemIndex={index}
              openedIndex={openedIndex}
              setOpenedIndex={setOpenedIndex}
              question={question}
              answer={answer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;

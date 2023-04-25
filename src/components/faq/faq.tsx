import React, { useState, ReactElement, Dispatch, SetStateAction } from 'react';
import Collapsible from 'react-collapsible';
import styles from '@/styles/faq/faq.module.scss';
import { PlusHorizontal, PlusVertical } from '@/assets/faq';
import questionsAndAnswers from './questionsAndAnswers';

interface AccordionItemOptions {
  question: string;
  answer: ReactElement;
  accordionIndex: number;
  currIndex: number;
  setCurrIndex: Dispatch<SetStateAction<number>>;
}

const AccordionItem = (props: AccordionItemOptions) => {
  const { question, answer, accordionIndex, currIndex, setCurrIndex } = props;

  const handleOpen = () => {
    if (currIndex === accordionIndex) {
      setCurrIndex(-1);
    } else {
      setCurrIndex(accordionIndex);
    }
  };

  return (
    <>
      <Collapsible
        handleTriggerClick={() => handleOpen()}
        transitionTime={200}
        open={currIndex === accordionIndex}
        trigger={
          <div
            className={`${styles.question} ${
              currIndex === accordionIndex ? styles.openQuestion : ''
            }`}
          >
            <h3>{question}</h3>
            <div className={styles.plus}>
              <div className={styles.plusHorizontal}>
                <PlusHorizontal />
                <div
                  className={`${
                    currIndex === accordionIndex ? styles.plusVerticalOpen : ''
                  }  ${styles.plusVertical}`}
                >
                  <PlusVertical />
                </div>
              </div>
            </div>
          </div>
        }
      >
        <p className={styles.answer}>{answer}</p>
      </Collapsible>
    </>
  );
};

const Faq = () => {
  const [currIndex, setCurrIndex] = useState(-1);

  return (
    <div style={{ background: '#033143' }}>
      <div className={styles.faqContainer}>
        <div className={styles.faqContent}>
          <h2>FAQ</h2>
          <div className={styles.questionList}>
            {questionsAndAnswers.map(({ question, answer }, index) => (
              <AccordionItem
                key={question}
                accordionIndex={index}
                currIndex={currIndex}
                setCurrIndex={setCurrIndex}
                question={question}
                answer={answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

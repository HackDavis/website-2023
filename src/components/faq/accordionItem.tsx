import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import Collapsible from 'react-collapsible';
import styles from '@/styles/faq/accordionItem.module.scss';
import { PlusHorizontal, PlusVertical } from '@/assets/faq';

interface AccordionItemOptions {
  question: string;
  answer: ReactElement;
  itemIndex: number;
  openedIndex: number;
  setOpenedIndex: Dispatch<SetStateAction<number>>;
}

const AccordionItem = (props: AccordionItemOptions) => {
  const { question, answer, itemIndex, openedIndex, setOpenedIndex } = props;

  const handleOpen = () => {
    if (itemIndex === openedIndex) {
      setOpenedIndex(-1);
    } else {
      setOpenedIndex(itemIndex);
    }
  };

  return (
    <>
      <Collapsible
        contentContainerTagName="li"
        triggerTagName="div"
        triggerClassName={styles.question}
        triggerOpenedClassName={styles.question}
        contentOuterClassName={styles.contentOuter}
        accordionPosition={itemIndex}
        tabIndex={itemIndex}
        transitionTime={200}
        easing="ease"
        handleTriggerClick={() => handleOpen()}
        open={itemIndex === openedIndex}
        trigger={
          <>
            <h3>{question}</h3>
            <div className={styles.plus}>
              <div className={styles.plusHorizontal}>
                <PlusHorizontal />
                <div
                  className={`${styles.plusVertical} ${
                    itemIndex === openedIndex ? styles.plusVerticalOpen : ''
                  }`}
                >
                  <PlusVertical />
                </div>
              </div>
            </div>
          </>
        }
      >
        <p className={styles.answer}>{answer}</p>
      </Collapsible>
    </>
  );
};

export default AccordionItem;

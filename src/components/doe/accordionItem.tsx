import React, { ReactNode, useState } from 'react';
import Collapsible from 'react-collapsible';
import styles from '@/styles/doe/accordionItem.module.scss';
import { PlusHorizontal, PlusVertical } from '@/assets/doe';

interface AccordionItemOptions {
  criteria: ReactNode | string;
}

const AccordionItem = (props: AccordionItemOptions) => {
  const { criteria } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapsible
        contentContainerTagName="div"
        triggerTagName="div"
        triggerClassName={styles.question}
        triggerOpenedClassName={styles.question}
        contentOuterClassName={styles.contentOuter}
        transitionTime={200}
        easing="ease"
        handleTriggerClick={() => setOpen(!open)}
        open={open}
        trigger={
          <>
            <h3>ELIGIBILITY CRITERIA</h3>
            <div className={styles.plus}>
              <div className={styles.plusHorizontal}>
                <PlusHorizontal />
                <div
                  className={`${styles.plusVertical} ${
                    open ? styles.plusVerticalOpen : ''
                  }`}
                >
                  <PlusVertical />
                </div>
              </div>
            </div>
          </>
        }
      >
        <p className={styles.answer}>{criteria}</p>
      </Collapsible>
    </>
  );
};

export default AccordionItem;

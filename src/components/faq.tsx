import React, { useState } from "react";
import Collapsible from "react-collapsible";
import styles from "@/styles/faq.module.scss";
import arrow from "../images/faqArrow.svg";
import Image from "next/image";

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapsible
        onOpening={() => setOpen(true)}
        onClosing={() => setOpen(false)}
        // This doesn't change the speed of the arrow :(
        // transitionTime={200}
        trigger={
          <div className={styles.question}>
            <span>{question}</span>
            <Image
              src={arrow}
              alt=""
              className={open ? styles.arrowImgOpen : styles.arrowImgClosed}
            />
          </div>
        }
      >
        <div className={styles.answer}>{answer}</div>
      </Collapsible>
    </>
  );
};

const Faq = () => {
  const questions = [
    "What is a hackathon?",
    "We will be following MLH's Code Of Conduct.",
    "Who can attend?",
    "How does applying as a team work? Why apply as a team?",
    "How can I help?",
    "Why social good?",
    "What can I build?",
    "What if I don't have a team or idea?",
    "How much does it cost?",
    "As an NPO, why should I attend?",
  ];

  const answers = [
    "answer 1",
    "answer 2",
    "answer 3",
    "answer 4",
    "answer 5",
    "answer 6",
    "answer 7",
    "answer 8",
    "answer 9",
    "answer 10",
  ];

  const [isOpen, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!isOpen);
  }
  return (
    <div className={styles.faqCont}>
      <h1>FAQ</h1>
      <div className={styles.questionList}>
        {questions.map((question, index) => (
          <AccordionItem question={question} answer={answers[index]} />
        ))}
      </div>
    </div>
  );
};

export default Faq;

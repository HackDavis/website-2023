import React, { useState } from "react";
import Collapsible from "react-collapsible";
import styles from "@/styles/faq.module.scss";
import arrow from "../images/faqArrow.svg";
import Image from "next/image";

// const Toggle = ({ question, answer }: { question: string; answer: string }) => {
//   const [toggleItem, setToggleItem] = useState(false);

//   const expandList = () => {
//     setToggleItem((prev) => !prev);
//   };

//   return (
//     <>
//       <li className={styles.question} onClick={() => expandList()}>
//         {question}
//         <Image src={arrow} alt="" className={styles.arrowImg}/>
//       </li>
//       {/* No animation */}
//       {/* {toggleItem && <li className={`${styles.answer} ${toggleItem ? styles.answer : styles.answerHidden}`}> {answer}</li>} */}
//       {/* Smooth animation but css bugged */}
//       {toggleItem ? (
//         <li className={styles.answer}>{answer}</li>
//       ) : (
//         <li className={styles.answerHidden}>{answer}</li>
//       )}
//     </>
//   );
// };

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

  const generateList = (questions: string[], answers: string[]) => {
    const list = questions.map((question: string, index) => (
    //   <React.Fragment key={index}>
    //     <Toggle question={question} answer={answers[index]} />
    //    </React.Fragment>

        <Collapsible trigger={question}>
            {answers[index]}
        </Collapsible>

    ));
    return <ul className={styles.question}>{list}</ul>;
  };

  generateList(questions, answers);

  return (
    <div className={styles.faqCont}>
      <h1>FAQ</h1>
      <div className={styles.questionList}>
        <div className={styles.questionCont} id="questionCont">
            question 1
            <Image src={arrow} alt="" className={styles.arrowImg}/>
        </div>
        <Collapsible triggerTagName="questionCont"
        trigger="this is question 1"  
        >
            "answer 1"
            "description 1"
        </Collapsible>
        {/* {generateList(questions, answers)} */}
      </div>
    </div>
  );
};

export default Faq;
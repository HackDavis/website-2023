import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import styles from '@/styles/faq.module.scss';
import Image from 'next/image';
import arrow from '../images/faqArrow.svg';

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
        transitionTime={200}
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
    'What is a hackathon?',
    // "We will be following MLH's Code Of Conduct.",
    'Who can attend?',
    'Do I need to know how to code?',
    'How do teams work?',
    // 'How does applying as a team work? Why apply as a team?',
    'How can I help?',
    'Why social good?',
    'What can I build?',
    "What if I don't have a team or idea?",
    'How much does it cost?',
    // 'As an NPO, why should I attend?',
  ];

  const answers = [
    "A hackathon is where you transform your crazy ideas into real stuff. Hundreds of students from across California form teams around an idea and collaboratively create technical solutions to problems we face in our local communities. These ideas turn into websites, mobile apps, hardware, and more! Come make the most incredible things you can imagine alongside fellow creators. You take care of building and we'll take care of you. We will be following the HackDavis Rules & Policies, and MLH's Code Of Conduct.",
    "HackDavis is open to all undergraduate and graduate students from all majors and all schools, and graduates who have completed their degrees within the past year. We are also open to high school students above the age of 18. As long as you're prepared to learn, brainstorm, and build cool things, we welcome you to join!",
    'Nope! HackDavis is proud to be a beginner-focused hackathon, and we welcome hackers from all experience levels and backgrounds - over 40% of our hackers are beginners! HackDavis is the perfect time and place to learn new skills - we host beginner-friendly workshops and our mentors provide guidance to help you build something you can be proud of.',
    'Teams can have up to four members, and submit a single project together! Want to go solo? Fine by us, but we’d highly recommend joining a team to make new friends and build cool stuff together!',
    'HackDavis is largely built upon the efforts of our mentors and volunteers, who ensure that our hackers have a great experience at our event! Our mentor and volunteer applications will open in late April, so keep an eye out! If you’re interested in making a tax-deductible contribution to HackDavis, please get in touch at team@hackdavis.io',
    'We want people to build projects with a meaningful impact and hope to foster a community dedicated to social change. We find that most hackathons often don’t result in projects as practical solutions to specific societal problems and we’re looking to change that.',
    "You can build whatever your heart desires, whether it's a web app, mobile app, hardware hack, open source tool, or even a simple website! Any social good oriented project is recommended. Our main focus is to bring you a learning experience where you can have fun, ask questions, and experiment with technology.",
    "Worry not! We also host a series of mixers before HackDavis, so check out our social media for announcements about those as we get closer to the event. We’ll also have a final mixer right after hacking starts during HackDavis, so we'll make sure you're equipped and ready to go! Our non-profit partners, sponsors, and mentors are always here at the event to help you brainstorm and ideate if you don’t have an idea!",
    'Zero. Zip. Zilch. Nada. HackDavis is free for all admitted participants, so don’t sweat it! We will provide your WiFi, meals, caffeine, swag, and workspace for the entire weekend.',
    // 'answer 10',
  ];

  return (
    <div style={{ background: '#033143' }}>
      <div className={styles.faqCont}>
        <div className={styles.faqText}>
          <h2>FAQ</h2>
        </div>
        <div className={styles.questionList}>
          {questions.map((question, index) => (
            <AccordionItem
              key={question}
              question={question}
              answer={answers[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

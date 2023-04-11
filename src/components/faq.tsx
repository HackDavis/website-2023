import React, { useState, ReactElement } from 'react';
import Collapsible from 'react-collapsible';
import styles from '@/styles/faq.module.scss';
import plusHorizontal from '@/images/plusHorizontal.svg';
import plusVertical from '@/images/plusVertical.svg';
import Image from 'next/image';

const AccordionItem = ({
  question,
  answer,
  accordionIndex,
  currIndex,
  setCurrIndex,
}: {
  question: string;
  answer: ReactElement;
  accordionIndex: number;
  currIndex: number;
  setCurrIndex: (index: number) => void;
}) => {
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
            className={`${
              currIndex === accordionIndex ? styles.openQuestion : ''
            } ${styles.question}`}
          >
            <span>{question}</span>
            <div className={styles.plus}>
              <div className={styles.plusHorizontal}>
                <Image src={plusHorizontal} alt="plus" />
                <div
                  className={`${
                    currIndex === accordionIndex ? styles.plusVerticalOpen : ''
                  }  ${styles.plusVertical}`}
                >
                  <Image src={plusVertical} alt="plus" />
                </div>
              </div>
            </div>
          </div>
        }
      >
        <div className={styles.answer}>{answer}</div>
      </Collapsible>
    </>
  );
};

const Faq = () => {
  const [currIndex, setCurrIndex] = useState(-1);
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
    <div key={0}>
      A hackathon is where you transform your crazy ideas into real stuff.
      Hundreds of students from across California form teams around an idea and
      collaboratively create technical solutions to problems we face in our
      local communities. These ideas turn into websites, mobile apps, hardware,
      and more!
      <br />
      <br />
      Come make the most incredible things you can imagine alongside fellow
      creators. You take care of building and we&apos;ll take care of you.
      <br />
      <br />
      We will be following the{' '}
      <a
        href="https://drive.google.com/file/d/1KnWwN5sFYTe49Z5312OKnS5FA8OtL4iD/view?usp=share_link"
        target="_blank"
        rel="noreferrer"
      >
        HackDavis Rules & Policies
      </a>
      , and{' '}
      <a href="https://mlh.io/code-of-conduct" target="_blank" rel="noreferrer">
        MLH&apos;s Code Of Conduct
      </a>
      .
    </div>,
    <div key={1}>
      HackDavis is open to{' '}
      <strong>all undergraduate and graduate students</strong> from all majors
      and all schools, and graduates who have completed their degrees within the
      past year. We are also open to high school students above the age of 18.
      As long as you&apos;re prepared to learn, brainstorm, and build cool
      things, we welcome you to join!
    </div>,
    <div key={2}>
      Nope! HackDavis is proud to be a beginner-focused hackathon, and we
      welcome hackers from all experience levels and backgrounds - over 40% of
      our hackers are beginners! HackDavis is the perfect time and place to
      learn new skills - we host beginner-friendly workshops and our mentors
      provide guidance to help you build something you can be proud of.
    </div>,
    <div key={3}>
      Teams can have up to four members, and submit a single project together!
      Want to go solo? Fine by us, but we&apos;d highly recommend joining a team
      to make new friends and build cool stuff together!
    </div>,
    <div key={4}>
      HackDavis is largely built upon the efforts of our mentors and volunteers,
      who ensure that our hackers have a great experience at our event! Our
      mentor and volunteer applications will open in late April, so keep an eye
      out! If you&apos;re interested in making a tax-deductible contribution to
      HackDavis, please get in touch at <a href="mailto:team@hackdavis.io">team@hackdavis.io</a>
    </div>,
    <div key={5}>
      We want people to build projects with a meaningful impact and hope to
      foster a community dedicated to social change. We find that most
      hackathons often don&apos;t result in projects as practical solutions to
      specific societal problems and we&apos;re looking to change that.
    </div>,
    <div key={6}>
      You can build whatever your heart desires, whether it&apos;s a web app,
      mobile app, hardware hack, open source tool, or even a simple website! Any
      social good oriented project is recommended. Our main focus is to bring
      you a learning experience where you can have fun, ask questions, and
      experiment with technology.
    </div>,
    <div key={7}>
      Worry not! We also host a series of mixers before HackDavis, so check out
      our social media for announcements about those as we get closer to the
      event. We&apos;ll also have a final mixer right after hacking starts
      during HackDavis, so we&apos;ll make sure you&apos;re equipped and ready
      to go!
      <br />
      <br />
      Our non-profit partners, sponsors, and mentors are always here at the
      event to help you brainstorm and ideate if you don&apos;t have an idea!
    </div>,
    <div key={8}>
      Zero. Zip. Zilch. Nada. HackDavis is free for all admitted participants,
      so don&apos;t sweat it! We will provide your WiFi, meals, caffeine, swag,
      and workspace for the entire weekend.
    </div>,
  ];

  return (
    <div style={{ background: '#033143' }}>
      <div className={styles.faqContainer}>
        <div className={styles.faqContent}>
          <h2>FAQ</h2>
          <div className={styles.questionList}>
            {questions.map((question, index) => (
              <AccordionItem
                key={question}
                accordionIndex={index}
                currIndex={currIndex}
                setCurrIndex={setCurrIndex}
                question={question}
                answer={answers[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

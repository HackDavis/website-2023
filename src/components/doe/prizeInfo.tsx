// https://hackdavis2023.devpost.com/

import { ReactNode } from 'react';

export interface Prize {
  categoryName: string;
  sponsor?: string;
  prizePreview?: ReactNode[];
  prizeFull: ReactNode[];
  criteria: ReactNode | string;
  highlight?: boolean;
}

const prizeList: Prize[] = [
  {
    categoryName: 'Best Hack for Social Good',
    prizeFull: [
      <>
        <strong>iPad</strong> 1st Place
      </>,
      <>
        <strong>Sony wireless headphones</strong> 2nd Place
      </>,
    ],
    criteria:
      'All entries are automatically considered for this prize category.',
    highlight: true,
  },
  {
    categoryName:
      'Karim Majdi Abou Najm Memorial Prize for Technical Complexity',
    prizeFull: [
      <>
        <strong>Amazon Echos</strong>
      </>,
    ],
    criteria: (
      <>
        Projects must showcase breadth and application of technical knowledge.
        <br />
        <br />
        In memory of Karim Majdi Abou Najm, a UC Davis Computer Science student
        and HackDavis winner.
      </>
    ),
  },
  {
    categoryName: 'Best Open Data Hack',
    sponsor: 'UC Davis DataLab',
    prizePreview: [
      <>
        <strong>DataLab Internship Program + more!</strong>
      </>,
    ],
    prizeFull: [
      <>
        The winning team will have their visualization printed and displayed in
        the DataLab in Shields Library, be invited to a DataLab luncheon, and
        invited to participate in DataLab’s internship program.
      </>,
      <>Swag bags</>,
    ],
    criteria: (
      <>
        Projects must use at least one publicly accessible dataset that relates
        to UC Davis to address questions of interest to our campus community.
        For consideration for this award, the team must produce a GitHub
        repository with a readME, annotated code, and a reproducible static data
        visualization. The visualization should have an accompanying 1-page
        narrative describing the goals, methods, and interpretation of the
        project.
      </>
    ),
  },
  {
    categoryName: 'Best Hack for Local-Global Good',
    sponsor: 'UC Davis Global Affairs',
    prizeFull: [
      <>
        <strong>Downtown Davis Gift Cards and Simply Modern Tumblers</strong>
      </>,
    ],
    criteria: (
      <>
        The 17 Sustainable Development Goals (SDGs) address shared economic,
        social and environmental challenges. Innovative solutions are needed at
        the local level, informed by the experiences and perspectives of
        affected communities. For this category, teams should design an
        application that supports involvement with the SDGs and development of
        creative approaches to these challenges at the campus or local level –
        by students, community members and groups, or local government. Teams
        should specify how their project connects to the SDGs in their
        submission.
      </>
    ),
  },
  {
    categoryName: 'Best Beginner Hack',
    prizeFull: [
      <>
        <strong>Smart TV / Gaming Monitor</strong>
      </>,
    ],
    criteria: <>Every team member must be a beginner in order to qualify.</>,
  },
  {
    categoryName: 'Best Healthcare Hack',
    prizeFull: [
      <>
        <strong>UC Davis School of Medicine Swag Bags</strong>
      </>,
    ],
    criteria: (
      <>
        Our local, national, and global communities face innumerable barriers to
        healthcare. The barriers to providing equitable care are complex and
        multi-faceted, ranging from language and geographic challenges,
        inadequate technological resources (e.g., imaging, clinical technology),
        and difficulties with providing patient engagement and education. Design
        a project that addresses a specific barrier in medicine, whether it be
        here in Davis/Sacramento or beyond.
      </>
    ),
  },
  {
    categoryName: 'Best Interdisciplinary Hack',
    sponsor: 'The College of Letters and Science',
    prizeFull: [
      <>
        <strong>Ice Cream Machine</strong>
      </>,
    ],
    criteria:
      'At least one member of the team needs to be a non-CS/CSE/otherwise CS-related major in order to qualify. More specifically, we are looking for teams that leverage multiple perspectives of different disciplines to create a more well-rounded project.',
  },

  {
    categoryName: 'Best Design',
    prizeFull: [
      <>
        <strong>Cafe Basket</strong>
      </>,
    ],
    criteria: 'No code required for this category!',
  },
  {
    categoryName:
      'Best Hardware Hack, sponsored by the UC Davis Student Startup Center',
    prizeFull: [
      <>
        <strong>Drone Set</strong>
      </>,
    ],
    criteria: 'Projects must include a hardware component.',
  },
  {
    categoryName: 'Most Creative Hack',
    prizeFull: [
      <>
        <strong>Lego Sets</strong>
      </>,
    ],
    criteria:
      'Projects must be unique and original, and showcase creativity and out-of-the-box thinking.',
  },
  {
    categoryName: 'Best Use of Microsoft Cloud for Your Community',
    prizeFull: [
      <>
        <strong>
          LinkedIn Premium 12-Month subscription and Xbox Ultimate 3-Month Game
          Pass
        </strong>
      </>,
    ],
    criteria: (
      <>
        Bring your idea to life using the Microsoft Cloud - automatically build
        and deploy a full stack web app from a code repository, create and train
        a Machine Learning model, develop business applications with little to
        no code using Power Platform, and more! View our recommended popular
        solutions in the Education Hub at{' '}
        <a href="https://aka.ms/startedu" target="_blank" rel="noreferrer">
          https://aka.ms/startedu
        </a>
        .
        <br />
        <br />
        Build your hackathon project with the Microsoft Cloud that tackles a
        social impact issue of your choice, and have a chance to win a LinkedIn
        Premium 12-Month subscription and an XBox Ultimate 3-Month Game Pass.
      </>
    ),
  },
  {
    categoryName: 'Best Use of MongoDB Atlas',
    prizeFull: [
      <>
        <strong>M5GO IoT Starter Kit</strong>
      </>,
    ],
    criteria:
      "MongoDB Atlas takes the leading modern database and makes it accessible in the cloud! Get started with a $50 credit for students or sign up for the Atlas free forever tier (no credit card required). Along with a suite of services and functionalities, you'll have everything you need to manage all of your data! Build a hack using MongoDB Atlas for a chance to win a M5GO IoT Starter Kit for you and each member of your team.",
  },
  {
    categoryName: 'Best Use of MATLAB',
    prizeFull: [
      <>
        <strong>Wireless YoYo Speaker</strong>
      </>,
    ],
    criteria:
      'MATLAB and Simulink are computational tools used at over 100,000 businesses, government and university sites in over 190 countries. Use MATLAB and/or Simulink exclusively or integrate them into another tool for your next hack to win an exclusive MathWorks branded Wireless YoYo Speaker! You can also claim a free MATLAB software license to get started.',
  },
  {
    categoryName: 'Best Domain Name from Domain.com',
    prizeFull: [
      <>
        <strong>Domain.com Branded Prize</strong>
      </>,
    ],
    criteria:
      'Register a .Tech domain name using Domain.com during the weekend for your chance to win a Domain.com branded prize for you and each member of your team! Each team may submit one entry per person on the team. The more creative the domain the better!',
  },
  {
    categoryName: 'Most Creative Use of GitHub',
    prizeFull: [
      <>
        <strong>GitHub Octocat Puzzle & Sticker bundle</strong>
      </>,
    ],
    criteria:
      'GitHub is one of the best ways to collaborate, push code, get feedback, and show the world what you’ve built during a hackathon. To take it a step further, GitHub is now offering you access to industry tools, events & learning resources through something called GitHub Global Campus. Win this weekend’s Most Creative Use of GitHub prize category, first by signing up for GitHub Global Campus and second by using a GitHub repository to host your hackathon project’s code! Make sure your use of GitHub stands out with a detailed ReadMe page, meaningful pull requests and collaboration history, and even a GitHub pages deployment!',
  },
  {
    categoryName: 'Best Use of Retool',
    prizeFull: [
      <>
        <strong>Ducky One 3 SF Pure White 65% mechanical keyboard</strong>
      </>,
    ],
    criteria: (
      <>
        Register with a student account and use Retool to create your next hack
        for Social Good. Each member of the winning team wins a Ducky One 3 SF
        Pure White 65% mechanical keyboard
      </>
    ),
  },
  {
    categoryName: 'Best Aggie Reuse Store Hack',
    prizeFull: [
      <>
        <strong>Aggie Reuse Store Prize Basket</strong>
      </>,
    ],
    criteria: (
      <>
        The Aggie Reuse Store received over 1,300 clothing items last quarter
        and diverted over 1,000 pounds of waste. These numbers have been growing
        every quarter, and they have become too large to be sustained by the
        spreadsheet they use to keep track of inventory. The current system of
        manually updating the spreadsheet to keep track of input and output is
        very tedious for volunteers and is prone to human error. To increase
        efficiency and sustainability, the Aggie Reuse Store would like to
        implement an inventory tracking system with a user-friendly, streamlined
        interface and an organized database for their data analytics team. How
        can we upgrade the current system to meet the Aggie Reuse Store’s need
        for an inventory tracking system?
        <br />
        <br />
        The Aggie Reuse Store currently has no way of monitoring the store’s
        foot traffic, so they don’t know how many students come in every week,
        what time students tend to come in, and what days of the week are most
        popular. Operating hours change from quarter to quarter, so they want to
        use customer traffic data to know when the most optimal time to open is
        and how to better staff their volunteers to support rush hour. How can
        we collect, organize, and display the Aggie Reuse Store’s visitor data
        in a user-friendly manner to better serve students?
      </>
    ),
  },
  {
    categoryName: 'Best TreeDavis Hack',
    prizeFull: [
      <>
        <strong>TreeDavis Prize Basket</strong>
      </>,
    ],
    criteria: (
      <>
        Tree Davis has a program where they convert turf lawns into
        Climate-Ready Landscapes. These are the installation of native,
        drought-tolerant plants and trees that are more beneficial to the
        environment than water-thirsty lawns. While it would be ideal to convert
        as much lawn as possible, some is still needed for active recreation,
        picnicking, etc. How can Tree Davis identify unneeded turf space that
        can be converted to Climate-Ready Landscapes and gather other related
        information, like amount, owner, and current use of space?
        <br />
        <br />
        Some people see trees as nuisances and prefer to cut them down, without
        recognizing their environmental benefits such as carbon sequestration,
        air quality improvement, and urban cooling. While there are tools that
        enumerate tree values, they are clunky and not easily accessible to
        individuals. How could Tree Davis educate people about the benefits of
        planting more trees and installing drought-tolerant landscapes, with the
        goal of inspiring action in their own homes/spaces?
      </>
    ),
  },
  {
    categoryName: 'Best American Wild Horse Campaign (AWHC) Hack',
    prizeFull: [
      <>
        <strong>AWHC Prize Basket + Internship Opportunity</strong>
      </>,
    ],
    criteria:
      "The American Wild Horse Campaign (AWHC) is a nonprofit organization fighting to ensure the future of America's iconic wild horses and burros and the Western public lands where they roam. There are many horses in the wild to the point where locating all the wild horses proves to be a difficult task. AWHC plans to implement the Wild Horse Animal Identifier, or Wild Horse ANI, which utilizes machine learning to identify wild horses. However, machine learning needs a lot of visual data, specifically images of horses. How can we create an app which accurately uploads photos of horses whilst also promoting community engagement?",
  },
];

const leftColumnPrizes = prizeList.filter(
  (prize, index) => index % 2 === 0 && index > 0
);

const rightColumnPrizes = prizeList.filter((prize, index) => index % 2 === 1);

export { leftColumnPrizes, rightColumnPrizes };

export default prizeList;

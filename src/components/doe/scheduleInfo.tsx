import { ReactNode } from 'react';

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type Hour = `0${IntRange<0, 10>}` | `${IntRange<10, 24>}`;
type Minute = `0${IntRange<0, 10>}` | `${IntRange<10, 60>}`;
type Timestamp = `${Hour}:${Minute}`;

export interface Event {
  start: Date;
  /**
   * duration in minutes
   */
  duration: number;
  /**
   * replaces the time in the card
   */
  headline?: string;
  name: string;
  description?: ReactNode;
  location?: string;
  type: 'Workshop' | 'Activity' | 'Food' | 'Other';
  /**
   * whether to remove end date from card
   */
  truncate?: boolean;
}

const saturdayDate = (time: Timestamp) =>
  new Date(`May 20, 2023 ${time}:00 GMT-7:00`);

const sundayDate = (time: Timestamp) =>
  new Date(`May 21, 2023 ${time}:00 GMT-7:00`);

const allDayEvents: Event[] = [
  {
    start: new Date(`Apr 20, 6969 04:20 GMT-7:00`),
    duration: 1440,
    headline: 'OPEN 24/7',
    name: 'Badminton',
    description: 'Student ID required for equipment',
    location: 'Badminton Court',
    type: 'Activity',
    truncate: true,
  },
  {
    start: new Date(`Apr 20, 6969 04:20 GMT-7:00`),
    duration: 1440,
    headline: 'OPEN 24/7',
    name: 'Ping-pong',
    description: 'Student ID required for equipment',
    location: 'Ping-pong Court',
    type: 'Activity',
    truncate: true,
  },
];

const saturdayEvents: Event[] = [
  {
    start: saturdayDate('10:00'),
    duration: 60,
    name: 'Opening Ceremony',
    type: 'Other',
  },
  {
    start: saturdayDate('11:00'),
    duration: 15,
    name: 'Hacking Starts',
    type: 'Other',
    truncate: true,
  },
  {
    start: saturdayDate('11:00'),
    duration: 60,
    name: 'Intro to Figma',
    description: 'Hosted by Design Interactive',
    location: 'ARC Ballroom A',
    type: 'Workshop',
  },
  {
    start: saturdayDate('11:15'),
    duration: 60,
    name: 'Pitching your Project',
    description: 'Hosted by Women in Computer Science',
    location: 'ARC Ballroom B',
    type: 'Workshop',
  },
  {
    start: saturdayDate('12:00'),
    duration: 30,
    headline: 'LUNCH',
    name: 'Mr. Pickles?',
    type: 'Food',
  },
  {
    start: saturdayDate('12:00'),
    duration: 60,
    name: 'UI Hacks',
    description: 'Hosted by Design Interactive',
    location: 'ARC Ballroom A',
    type: 'Workshop',
  },
  {
    start: saturdayDate('12:30'),
    duration: 60,
    name: 'Black and Latinx in Tech Career Panel',
    description: 'Hosted by ColorStack at UC Davis',
    location: 'ARC Ballroom B',
    type: 'Workshop',
  },
  {
    start: saturdayDate('12:30'),
    duration: 120,
    name: 'Effective Collaboration with Github',
    description: 'Hosted by DataLab',
    location: 'Arc Meeting Room',
    type: 'Workshop',
  },
  {
    start: saturdayDate('13:15'),
    duration: 60,
    name: 'Ethics in Computer Science',
    description: 'Hosted by Davis Computer Science Club',
    location: 'ARC Ballroom A',
    type: 'Workshop',
  },
  {
    start: saturdayDate('13:45'),
    duration: 60,
    name: 'Building and Strengthening Your Resume, Cover Letter, and LinkedIn',
    description: 'Hosted by Davis Undergraduate Engineering Network',
    location: 'ARC Ballroom B',
    type: 'Workshop',
  },
  {
    start: saturdayDate('14:00'),
    duration: 60,
    name: 'Cupstacking Tournament',
    type: 'Activity',
  },
  {
    start: saturdayDate('14:30'),
    duration: 60,
    name: 'Intro to HTML/CSS',
    description: 'Hosted by #include @ Davis',
    location: 'ARC Ballroom A',
    type: 'Workshop',
  },
  {
    start: saturdayDate('15:00'),
    duration: 60,
    name: 'Crash Course to Business Development',
    description: 'Hosted by Student Startup Center',
    location: 'ARC Ballroom B',
    type: 'Workshop',
  },
  {
    start: saturdayDate('15:30'),
    duration: 30,
    headline: 'AFTERNOON SNACK',
    name: 'Yakult or Pocky',
    type: 'Food',
  },
  {
    start: saturdayDate('15:45'),
    duration: 60,
    name: 'Webscraping and its Practical Application in Industry',
    description: 'Hosted by CodeLab',
    location: 'ARC Ballroom A',
    type: 'Workshop',
  },
  {
    start: saturdayDate('16:15'),
    duration: 60,
    name: 'Build Your Chat-GPT Plugin',
    description: 'Hosted by Sriya Maram and Rush Shahani',
    location: 'ARC Ballroom B',
    type: 'Workshop',
  },
  {
    start: saturdayDate('17:00'),
    duration: 60,
    name: 'Deploying Your Angular App to GitHub Pages',
    description: 'Hosted by Meziah Ruby',
    location: 'ARC Ballroom A',
    type: 'Workshop',
  },
  {
    start: saturdayDate('17:30'),
    duration: 60,
    name: 'Best Design Practices',
    description: 'Hosted by #include @ Davis',
    location: 'ARC Ballroom B',
    type: 'Workshop',
  },
  {
    start: saturdayDate('18:15'),
    duration: 60,
    name: 'Intro to Product Management',
    description: 'AggieWorks',
    location: 'ARC Ballroom A',
    type: 'Workshop',
  },
  {
    start: saturdayDate('18:45'),
    duration: 45,
    headline: 'DINNER',
    name: 'Dumpling House',
    type: 'Food',
  },
  {
    start: saturdayDate('19:30'),
    duration: 60,
    name: 'Unity Programming Basics',
    description: 'Game Development and Arts Club',
    location: 'ARC Ballroom A',
    type: 'Workshop',
  },
  {
    start: sundayDate('20:45'),
    duration: 60,
    headline: 'SNACK',
    name: 'Pepitos Paletas',
    type: 'Food',
  },
  {
    start: saturdayDate('20:45'),
    duration: 60,
    name: 'Bob Ross Painting',
    description: 'Hosted by MLH!',
    location: 'ARC Ballroom A',
    type: 'Activity',
  },
];

const sundayEvents: Event[] = [
  {
    start: sundayDate('08:30'),
    duration: 120,
    headline: 'BREAKFAST',
    name: 'Fluffy Donuts and Oatmeal',
    type: 'Food',
  },
  {
    start: sundayDate('11:30'),
    duration: 30,
    name: 'Hacking Ends',
    type: 'Other',
    truncate: true,
  },
  {
    start: sundayDate('13:00'),
    duration: 90,
    name: 'Demos',
    type: 'Other',
  },
  {
    start: sundayDate('14:30'),
    duration: 90,
    name: 'Closing Ceremony',
    type: 'Other',
  },
];

const noFoodSaturdayEvents = saturdayEvents.filter(
  (event) => event.type !== 'Food'
);
const noFoodSundayEvents = sundayEvents.filter(
  (event) => event.type !== 'Food'
);

export { noFoodSaturdayEvents as saturdayEvents };

export { noFoodSundayEvents as sundayEvents };

export { allDayEvents };

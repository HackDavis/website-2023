import styles from '@/styles/doe/scheduleCard.module.scss';
import { Event } from './scheduleInfo';

interface ScheduleCardOptions {
  key: string;
  event: Event;
}

const getTimeString = (time: Date) =>
  time
    .toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
      timeZone: 'America/Los_Angeles',
    })
    .replace(/\s/g, ' ')
    .slice(0, -3);

const ScheduleCard = ({ key, event }: ScheduleCardOptions) => {
  const { start, duration, name, description, location, type, truncate } =
    event;

  const headline =
    event.headline ??
    `${getTimeString(start)}${
      truncate
        ? ''
        : ` - ${getTimeString(new Date(start.getTime() + duration * 60000))}`
    }`;

  return (
    <li
      key={key}
      className={`${styles.container} ${styles[type.toLowerCase()]}}`}
    >
      <strong>{headline}</strong>
      <h4>{name}</h4>
      <p>{description}</p>
      <strong>{location}</strong>
    </li>
  );
};

export default ScheduleCard;

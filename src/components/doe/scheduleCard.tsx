import styles from '@/styles/doe/scheduleCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Event } from './scheduleInfo';

interface ScheduleCardOptions {
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

const checkEventTime = (start: Date, duration: number, type: string) => {
  // TODO: Change currentTime back to the actual current time after done testing.
  const currentTime = new Date('May 20, 2023 12:00 GMT-7:00').getTime();
  const eventStartTime = start.getTime();
  const eventEndTime = start.getTime() + duration * 60000;

  if (eventEndTime < currentTime) {
    return 'pastEvent';
  }

  if (eventStartTime <= currentTime && currentTime <= eventEndTime) {
    return `current${type}Event`;
  }

  return '';
};

const ScheduleCard = ({ event }: ScheduleCardOptions) => {
  const { start, duration, name, description, location, type, truncate } =
    event;

  const headline =
    event.headline ??
    `${getTimeString(start)}${
      truncate
        ? ''
        : ` - ${getTimeString(new Date(start.getTime() + duration * 60000))}`
    }`;
  const eventPeriod = checkEventTime(start, duration, type);

  return (
    <li className={`${styles.container} ${styles[eventPeriod]}`}>
      <strong className={styles.headline}>{headline}</strong>
      <h4 className={`${styles[type.toLowerCase()]}`}>{name}</h4>
      {description ? <p>{description}</p> : null}
      {location ? (
        <strong className={`${styles.location}`}>
          <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
          {location}
        </strong>
      ) : null}
    </li>
  );
};

export default ScheduleCard;

import styles from '@/styles/doe/schedule.module.scss';
import { saturdayEvents, sundayEvents } from './scheduleInfo';
import ScheduleCard from './scheduleCard';

const Schedule = () => (
  <section id="schedule" className={styles.container}>
    <h2>Schedule</h2>
    <ul className={styles.filters}>
      <li>ALL</li>
      <li>Workshops</li>
      <li>Activities</li>
      <li>Menu</li>
    </ul>
    <div>
      <h3>
        Saturday <span>5/20</span>
      </h3>
      <ul>
        {saturdayEvents.map((event) => (
          <ScheduleCard key={event.name} event={event} />
        ))}
      </ul>
    </div>
    <div>
      <h3>
        Sunday <span>5/21</span>
      </h3>
      <ul>
        {sundayEvents.map((event) => (
          <ScheduleCard key={event.name} event={event} />
        ))}
      </ul>
    </div>
  </section>
);

export default Schedule;

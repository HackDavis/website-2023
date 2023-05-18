import styles from '@/styles/doe/schedule.module.scss';
import { useState, useEffect } from 'react';
import { saturdayEvents, sundayEvents } from './scheduleInfo';
import ScheduleCard from './scheduleCard';

type ScheduleFilter = 'all' | 'workshop' | 'activity' | 'food';

const Schedule = () => {
  const [filter, setFilter] = useState<ScheduleFilter>('all');
  const [filteredSaturdayEvents, setFilteredSaturdayEvents] =
    useState(saturdayEvents);
  const [filteredSundayEvents, setFilteredSundayEvents] =
    useState(saturdayEvents);

  useEffect(() => {
    switch (filter) {
      case 'food': {
        setFilteredSaturdayEvents(
          saturdayEvents.filter(({ type }) => type === 'Food')
        );
        setFilteredSundayEvents(
          sundayEvents.filter(({ type }) => type === 'Food')
        );
        break;
      }
      case 'workshop': {
        setFilteredSaturdayEvents(
          saturdayEvents.filter(({ type }) => type === 'Workshop')
        );
        setFilteredSundayEvents(
          sundayEvents.filter(({ type }) => type === 'Workshop')
        );
        break;
      }
      case 'activity': {
        setFilteredSaturdayEvents(
          saturdayEvents.filter(({ type }) => type === 'Activity')
        );
        setFilteredSundayEvents(
          sundayEvents.filter(({ type }) => type === 'Activity')
        );
        break;
      }
      default: {
        setFilteredSaturdayEvents(saturdayEvents);
        setFilteredSundayEvents(sundayEvents);
      }
    }
  }, [filter]);

  return (
    <section id="schedule" className={styles.container}>
      <h2>Schedule</h2>
      <ul className={styles.filters}>
        <li>
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={filter === 'all' ? styles.selected : ''}
          >
            ALL
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setFilter('workshop')}
            className={filter === 'workshop' ? styles.selected : ''}
          >
            Workshops
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setFilter('activity')}
            className={filter === 'activity' ? styles.selected : ''}
          >
            Activities
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setFilter('food')}
            className={filter === 'food' ? styles.selected : ''}
          >
            Menu
          </button>
        </li>
      </ul>
      <div className={styles.scheduleContainer}>
        <div>
          <h3 className={styles.day}>
            SATURDAY <span>5/20</span>
          </h3>
          <div className={`${styles.scheduleCards} ${styles.boxShadow}`}>
            <ul>
              {filteredSaturdayEvents.map((event) => (
                <ScheduleCard key={event.name} event={event} />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className={styles.day}>
            SUNDAY <span>5/21</span>
          </h3>
          <div className={styles.scheduleCards}>
            <ul>
              {filteredSundayEvents.map((event) => (
                <ScheduleCard key={event.name} event={event} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

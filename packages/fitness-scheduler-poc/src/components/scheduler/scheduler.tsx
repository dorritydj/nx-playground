import Calendar, { CalendarTileProperties } from 'react-calendar';
import Day from '../day/day';
import styles from './scheduler.module.scss';
import { useScheduler } from './useScheduler';

/* eslint-disable-next-line */
export interface SchedulerProps {}

export function Scheduler(props: SchedulerProps) {
  const {
    currentDate,
    fortnight,
    setCurrentDate,
    isTileDisabled,
    returnToToday,
    getTileContent,
  } = useScheduler();

  return (
    <div>
      <button onClick={returnToToday}>Return to Today</button>
      <Calendar
        onChange={setCurrentDate}
        value={currentDate}
        tileDisabled={isTileDisabled}
        maxDate={fortnight}
        tileClassName={styles['tile']}
        tileContent={getTileContent}
        showNavigation={false}
      />
    </div>
  );
}

export default Scheduler;

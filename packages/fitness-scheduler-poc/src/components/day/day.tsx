import { CalendarTileProperties } from 'react-calendar';
import styles from './day.module.scss';
import { useDaySchedule } from './useDaySchedule';

/* eslint-disable-next-line */
export interface DayProps {
  tile: CalendarTileProperties;
}

export function Day({ tile }: DayProps) {
  const { schedule } = useDaySchedule();

  return (
    <div className={styles['container']}>
      {schedule.map((apt) => (
        <div className={styles['apt']} key={apt.start}>
          <p>{apt.start > 11 ? `${apt.start - 12 || 12}p` : `${apt.start}a`}</p>
          <p>{apt.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Day;

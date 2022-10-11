import React, { createElement, useCallback, useMemo, useState } from 'react';
import { CalendarTileProperties } from 'react-calendar';
import Day from '../day/day';

const addWeeksToDate = (numWeeks: number, date = new Date()) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + numWeeks * 7);

  return newDate;
};

interface UseScheduler {
  currentDate: Date;
  fortnight: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  isTileDisabled: ((props: CalendarTileProperties) => boolean) | undefined;
  returnToToday: () => void;
  getTileContent: (tile: CalendarTileProperties) => JSX.Element | null;
}
export function useScheduler(): UseScheduler {
  const [currentDate, setCurrentDate] = useState(new Date());

  const fortnight = useMemo(
    () => addWeeksToDate(2, currentDate),
    [currentDate]
  );

  const isTileDisabled = useCallback(
    ({ date }: CalendarTileProperties): boolean => {
      const [start, end] = [currentDate, addWeeksToDate(2, currentDate)];

      // return true if disabled, false if enabled
      return (
        date.getTime() <= start.getTime() || date.getTime() > end.getTime()
      );
    },
    [currentDate]
  );

  const returnToToday = () => {
    setCurrentDate(new Date());
  };

  const getTileContent = useCallback(
    (tile: CalendarTileProperties) => {
      if (!isTileDisabled(tile)) {
        return createElement(Day, { tile });
      }

      return null;
    },
    [isTileDisabled]
  );

  return {
    currentDate,
    fortnight,
    setCurrentDate,
    isTileDisabled,
    returnToToday,
    getTileContent,
  };
}

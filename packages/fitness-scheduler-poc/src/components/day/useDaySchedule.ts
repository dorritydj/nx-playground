import { useMemo } from 'react';
import { faker } from '@faker-js/faker';

interface UseDaySchedule {
  schedule: Appointment[];
}

interface Appointment {
  name: string;
  start: number;
  end: number;
}

export function useDaySchedule(): UseDaySchedule {
  const schedule = useMemo(() => createFakeSchedule(), []);

  return {
    schedule,
  };
}

function createFakeSchedule(): Appointment[] {
  // needs to setup a fake schedule filled with loose appointment data
  // more data can come after once routing is determined
  const schedule: Appointment[] = Array.from({ length: 12 }, (_, i) => ({
    name: 'OPEN',
    start: i + 8,
    end: i + 9,
  }));

  schedule.forEach((appt) => {
    const shouldSchedule = randomInRange(0, 1);

    if (shouldSchedule) {
      appt.name = faker.name.fullName();
    }
  });

  console.log(schedule);

  return schedule;
}

function randomInRange(start: number, end: number) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

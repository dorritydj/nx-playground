import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './app.scss';

const pricePerDay = 20;
const parkingSpaces = [
  {
    id: 1,
    isParked: true,
  },
  {
    id: 2,
    isParked: true,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
    isParked: true,
  },
];

type Space = typeof parkingSpaces[0];

// 1. display the cars
// 2. show cars that are parked
// 3. update revenue based on currently parked cars
// 4. click to remove the car and add a new one, updating the revenue

function ParkingSpace({
  space,
  updateRevenue,
}: {
  space: Space;
  updateRevenue: Dispatch<SetStateAction<number>>;
}) {
  const [hasCar, setHasCar] = useState(space.isParked);

  useEffect(() => {
    updateRevenue((revenue) => {
      return hasCar ? (revenue += pricePerDay) : revenue;
    });
  }, [hasCar, updateRevenue]);

  const handleCar = () => {
    setHasCar((isParked) => {
      return !isParked;
    });
  };

  return (
    <div className="parking-space" onClick={handleCar}>
      {hasCar && <div className="car"></div>}
    </div>
  );
}

export function App() {
  const [revenue, setRevenue] = useState(0);

  return (
    <div className="parking-lot">
      {parkingSpaces.map((space) => (
        <ParkingSpace space={space} updateRevenue={setRevenue} />
      ))}
      <div className="revenue">Total revenue: ${revenue}</div>
    </div>
  );
}

export default App;

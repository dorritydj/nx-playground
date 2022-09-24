import { TableRow, TableCell } from '@mui/material';
import useId from '@mui/material/utils/useId';
import { useEffect, useState } from 'react';
import { Effectiveness } from '../../api/data';
import { useFetchAttackingMultipliers } from '../../api/fetch';

const colorEffectivenessMap: Record<Effectiveness, string> = {
  [Effectiveness.Normal]: 'white',
  [Effectiveness.Weak]: 'red',
  [Effectiveness.Strong]: 'green',
  [Effectiveness.Null]: 'black',
};

// need to rethink this because it's not correct
// needs to take into account defending multiplier values as well

function AttackCell({
  effectiveness,
  index,
  type,
}: Record<string, Effectiveness | number | any>) {
  const [color, setColor] = useState<string>('white');

  useEffect(() => {
    console.log(
      effectiveness,
      type,
      colorEffectivenessMap[effectiveness as Effectiveness]
    );
    setColor(colorEffectivenessMap[effectiveness as Effectiveness]);
  }, [effectiveness, type]);

  return (
    <TableCell key={`${type} + ${effectiveness} + ${index}`}>
      <div
        style={{
          backgroundColor: color,
          height: `30px`,
          width: `50px`,
        }}
      ></div>
    </TableCell>
  );
}

export function AttackingRow({ type }: Record<string, any>) {
  const [multipliers, multisLoading] = useFetchAttackingMultipliers(type);
  const id = useId();

  return multisLoading ? null : (
    <TableRow>
      <TableCell>{type}</TableCell>
      {multipliers.map((effectiveness: Effectiveness, index: number) => (
        <AttackCell
          key={`${id} attack cell ${type} ${effectiveness} ${index}`}
          effectiveness={effectiveness}
          index={index}
          type={type}
        />
      ))}
    </TableRow>
  );
}

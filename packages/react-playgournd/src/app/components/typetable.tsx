import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { useContext } from 'react';
import { TypeContext } from '../app';
import { AttackingRow } from './attacking-row';

export function TypeTable() {
  const types: string[] = useContext(TypeContext);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {types.map((type: string) => (
              <TableCell key={type}>{type}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {types.map((type: string) => (
            <AttackingRow key={type} type={type} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

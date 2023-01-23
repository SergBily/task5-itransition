import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  number: string,
  identifier: number,
  name: number,
  address: number,
  phone: number,
) {
  return {
    number, identifier, name, address, phone,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 165.0, 49, 3.9),
];

const TableData = () => (
  <TableContainer component={Paper} sx={{ background: 'linear-gradient(90deg, #10170e8d,#1d697c8d,#d8a7eb8d)' }}>
    <Table sx={{ minWidth: 650, borderColor: 'red' }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ borderColor: 'red' }}>
          <TableCell sx={{ fontSize: '20px' }}>Number</TableCell>
          <TableCell sx={{ fontSize: '20px' }} align="right">Identifier</TableCell>
          <TableCell sx={{ fontSize: '20px' }} align="right">Name</TableCell>
          <TableCell sx={{ fontSize: '20px' }} align="right">Address</TableCell>
          <TableCell sx={{ fontSize: '20px' }} align="right">Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.number}
            </TableCell>
            <TableCell align="right">{row.identifier}</TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.address}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableData;

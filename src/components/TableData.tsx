import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ResponseRandomData } from '../models/responseRandomData.js';

interface TableDataProps {
  fakerData: ResponseRandomData[]
}

const TableData = ({ fakerData }: TableDataProps) => (
  <TableContainer component={Paper} sx={{ background: 'linear-gradient(90deg, #10170e8d,#1d697c8d,#d8a7eb8d)' }}>
    <Table sx={{ minWidth: 650, borderColor: 'red' }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ borderColor: 'red' }}>
          <TableCell sx={{ fontSize: '20px' }}>Number</TableCell>
          <TableCell sx={{ fontSize: '20px' }} align="left">Identifier</TableCell>
          <TableCell sx={{ fontSize: '20px' }} align="left">Name</TableCell>
          <TableCell sx={{ fontSize: '20px' }} align="left">Address</TableCell>
          <TableCell sx={{ fontSize: '20px' }} align="left">Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {fakerData.map((data) => (
          <TableRow
            key={data.number}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {data.number}
            </TableCell>
            <TableCell align="left">{data._id}</TableCell>
            <TableCell align="left">{data.fullName}</TableCell>
            <TableCell align="left">{data.address}</TableCell>
            <TableCell align="left">{data.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableData;

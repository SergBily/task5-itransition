import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useInView } from 'react-intersection-observer';
import { Button } from '@mui/material';
import { ResponseRandomData } from '../models/responseRandomData.js';
import RandomData from '../services/fakesData';

interface TableDataProps {
  fakerData: ResponseRandomData[],
  setBottomInView: (r: boolean) => void
}

const TableData = ({ fakerData, setBottomInView }: TableDataProps) => {
  const [myRef, inView] = useInView();

  useEffect(() => {
    setBottomInView(inView);
  }, [inView]);

  const exportToCsv = () => {
    RandomData.getCsvFile();
  };

  return (
    <div style={{ position: 'relative' }}>
      <TableContainer component={Paper} sx={{ background: 'linear-gradient(90deg, #10170e8d,#1d697c8d,#d8a7eb8d)' }}>
        <Table
          sx={{
            maxWidth: '100%', borderColor: 'red',
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ borderColor: 'red' }}>
              <TableCell sx={{ fontSize: '20px' }}>Number</TableCell>
              <TableCell sx={{ fontSize: '20px' }} align="left">Identifier</TableCell>
              <TableCell sx={{ fontSize: '20px' }} align="left">Full name</TableCell>
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
                <TableCell align="left" sx={{ maxWidth: 300, wordWrap: 'break-word' }}>{data._id}</TableCell>
                <TableCell align="left" sx={{ maxWidth: 300, wordWrap: 'break-word' }}>{data.fullName}</TableCell>
                <TableCell align="left" sx={{ maxWidth: 300, wordWrap: 'break-word' }}>{data.address}</TableCell>
                <TableCell align="left" sx={{ maxWidth: 300, wordWrap: 'break-word' }}>{data.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" sx={{ position: 'fixed', bottom: '50px', right: '30px' }} onClick={exportToCsv}>Export to CSV</Button>
      <div
        ref={myRef}
        style={{
          height: '10px',
          width: '10px',
          position: 'absolute',
          backgroundColor: 'transparent',
          bottom: '50px',
        }}
      />
    </div>
  );
};

export default TableData;

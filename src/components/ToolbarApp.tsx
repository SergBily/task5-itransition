import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField } from '@mui/material';
import Slider from '@mui/material/Slider';
import ButtonsRegion from './ButtonsRegion';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ToolbarApp = () => {
  const [errorsRange, setErrorsRange] = useState<number>(0);
  const [seedValue, setSeedValue] = useState<string>('');

  const [region, setRegion] = useState<string>('en');
  console.log(region, 1);

  const onChangeRegion = (r: string): void => setRegion(r);

  const changeSeedHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSeedValue(e.target.value);
  };

  const changeMistakeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setErrorsRange(+e.target.value);
  };

  const getSeedValue = (): void => {
    console.log(seedValue);
  };

  const changeRangeMistakesHandler = (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ): void => {
    console.log(event, value, activeThumb);
    setErrorsRange(value as number);
  };

  console.log(errorsRange);

  const valuetext = (value: number) => `${value}°C`;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          flexGrow: 1,
          height: '85px',
          background: 'linear-gradient(45deg, #10170e,#1d697c,#d8a7eb)',
        }}
        position="static"
        className="app-bar"
      >
        <Toolbar sx={{ justifyContent: 'space-between', marginTop: '10px' }}>
          <ButtonsRegion onChangeRegion={onChangeRegion} />
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <TextField
              id="standard-number"
              label="Error"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              color="info"
              sx={{
                display: { xs: 'none', sm: 'block' }, marginLeft: '15px', color: 'white',
              }}
              value={errorsRange === 0 ? '' : errorsRange}
              onChange={changeMistakeHandler}
            />
            <Slider
              aria-label="Temperature"
              defaultValue={0}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={0.5}
              marks
              min={0}
              max={10}
              sx={{ width: '200px', padding: 0 }}
              value={errorsRange}
              onChange={changeRangeMistakesHandler}
            />
          </div>
          <div style={{ display: 'flex', width: '350px', justifyContent: 'space-between' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ color: 'black' }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={seedValue}
                onChange={changeSeedHandler}
              />
            </Search>
            <Button variant="contained" onClick={getSeedValue}>Random</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ToolbarApp;

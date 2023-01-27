import React, { useEffect, useState } from 'react';
import {
  styled, alpha, createTheme, ThemeProvider,
} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { Button, TextField } from '@mui/material';
import Slider from '@mui/material/Slider';
import ButtonsRegion from './ButtonsRegion';
import RandomData from '../services/fakesData';
import { ResponseRandomData } from '../models/responseRandomData';

const themes = createTheme({
  palette: {
    neutral: {
      main: '#dd66e09d',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    neutral: true;
  }
}

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

interface ToolbarAppProps {
  setFakerData: (d: ResponseRandomData[]) => void
  fakerData: ResponseRandomData[],
  bottomInView: boolean
}

const ToolbarApp = ({ setFakerData, fakerData, bottomInView }: ToolbarAppProps) => {
  const [errorRate, setErrorRate] = useState<number>(0);

  const [currentSeedValue, setSeedValue] = useState<string>('');

  const [region, setRegion] = useState<string>('en');

  const [currentPage, setCurrentPage] = useState<number>(1);

  const onChangeRegion = (r: string): void => setRegion(r);

  useEffect(() => {
    if (bottomInView && fakerData.length > 0) {
      RandomData.getRandomData({
        seed: currentSeedValue, errorRate, region, page: currentPage,
      })
        .then((newFakerData) => setFakerData(newFakerData));
      setCurrentPage((preState) => preState + 1);
    }
  }, [bottomInView]);

  const changeSeedHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSeedValue(e.target.value);
  };

  const changeMistakeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setErrorRate(+e.target.value);
  };

  const resetToDefaultState = () => {
    setCurrentPage(1);
    setFakerData([]);
  };

  const getSeedValue = async (): Promise<void> => {
    resetToDefaultState();
    const newFakerData = await RandomData.getRandomData({
      seed: currentSeedValue, errorRate, region, page: 1,
    });
    setFakerData(newFakerData);
    setCurrentPage(2);
  };

  const changeRangeMistakesHandler = (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ): void => {
    const v = [value, event, activeThumb];
    setErrorRate(v[0] as number);
  };

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
              value={errorRate === 0 ? '' : errorRate}
              onChange={changeMistakeHandler}
            />
            <ThemeProvider theme={themes}>
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
                value={errorRate}
                color="neutral"
                onChange={changeRangeMistakesHandler}
              />
            </ThemeProvider>
          </div>
          <div style={{ display: 'flex', width: '350px', justifyContent: 'space-between' }}>
            <Search>
              <StyledInputBase
                sx={{ color: 'black' }}
                placeholder="seed…"
                inputProps={{ 'aria-label': 'search' }}
                value={currentSeedValue}
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

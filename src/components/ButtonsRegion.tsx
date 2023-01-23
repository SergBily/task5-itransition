import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

type ButtonsRegionProps = {
  onChangeRegion: (r: string) => void
};

const ButtonsRegion = ({ onChangeRegion }: ButtonsRegionProps) => {
  const onChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    onChangeRegion(((e.target as HTMLButtonElement).dataset.region) as string);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup className="region__btn-group" variant="outlined" aria-label="outlined button group">
        <Button className="region__btn" data-region="en" onClick={onChange}>USA</Button>
        <Button className="region__btn" data-region="de" onClick={onChange}>Germany</Button>
        <Button className="region__btn" data-region="fr" onClick={onChange}>France</Button>
      </ButtonGroup>
    </Box>
  );
};

export default ButtonsRegion;

import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

type ButtonsRegionProps = {
  onChangeRegion: (r: string) => void
};

const ButtonsRegion = ({ onChangeRegion }: ButtonsRegionProps) => {
  const onChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const buttonsRegion = document.querySelectorAll('.region__btn') as NodeListOf<HTMLButtonElement>;
    buttonsRegion.forEach((t) => t.classList.remove('activ__btn'));
    const { target } = e;
    onChangeRegion(((target as HTMLButtonElement).dataset.region) as string);
    (target as HTMLButtonElement).classList.add('activ__btn');
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
        <Button className="region__btn activ__btn" data-region="en" onClick={onChange}>USA</Button>
        <Button className="region__btn" data-region="de" onClick={onChange}>Germany</Button>
        <Button className="region__btn" data-region="fr" onClick={onChange}>France</Button>
      </ButtonGroup>
    </Box>
  );
};

export default ButtonsRegion;

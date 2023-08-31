import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

export const HeaderLinksBox = styled(Box)<BoxProps>(({ theme }) => ({
  // backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginLeft: 'auto',
  width: '100%',
  maxWidth: '715px',
}));

import { Button, ButtonProps } from '@mui/material';

export const ButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontSize: '20px',
  fontWeight: '500',
  textDecoration: 'none',
  textAlign: 'left',
  height: '23px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-5px',
    width: 0,
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '15px',
    transition: 'width 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
  },
}));

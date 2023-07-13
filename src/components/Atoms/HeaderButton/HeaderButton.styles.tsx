import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

const tiltAmount = '1.2rem';

export const HeaderButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  textTransform: 'none',
  maxWidth: '150px',
  fontSize: '20px',
  height: '45px',
  fontWeight: '500',
  textDecoration: 'none',
  transition: 'color 0.18s linear',
  border: `3px solid ${theme.palette.secondary.main}`,
  borderRadius: '99rem',
  overflow: 'hidden',
  padding: '0.8rem 3rem',
  color: theme.palette.text.primary,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0',
    height: '100%',
    background: '#000',
    transition: 'width 0.18s linear',
    zIndex: -1,
  },
  '&:hover': {
    color: theme.palette.text.secondary,
    '&::before': {
      width: '100%',
    },
    '& span': {
      color: '#fff',
    },
  },
  '& span': {
    color: theme.palette.text.secondary,
    zIndex: 1,
    position: 'relative',
  },
}));

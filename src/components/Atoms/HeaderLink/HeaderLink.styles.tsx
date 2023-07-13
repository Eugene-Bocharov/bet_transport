import { styled } from '@mui/material/styles';
import { Link, LinkProps } from 'react-router-dom';

// export const LinkStyled = styled(Link)<LinkProps>(({ theme }) => ({
//   color: theme.palette.text.primary,
//   fontSize: '25px',
//   fontWeight: '500',
//   textDecoration: 'none',
//   transition: 'all 0.3s linear',
//   '&:hover': {
//     color: theme.palette.secondary.light,
//   },
// }));

export const LinkStyled = styled(Link)<LinkProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '20px',
  fontWeight: '500',
  textDecoration: 'none',
  // fontFamily: theme.typography.fontFamily,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-5px',
    width: 0,
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '15px', // Add this line to set the border radius
    transition: 'width 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));

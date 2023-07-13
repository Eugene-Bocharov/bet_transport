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

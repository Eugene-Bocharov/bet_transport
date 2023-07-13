import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

export const WhyUsBox = styled(Box)<BoxProps>(({ theme }) => ({
  // backgroundColor: theme.palette.background.default,
  backgroundColor: '#782349',
  width: '72%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '200px',
  borderRadius: '10px',
  fontWeight: 900,
  fontSize: '80px',
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  //   animation: `${slideInAnimation} 1s forwards`,
}));

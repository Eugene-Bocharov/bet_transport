import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

export const ShortDescBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: `rgba(45, 47, 36, 1)`,
  color: '#fff',
  fontWeight: 900,
  fontSize: '80px',
  textAlign: 'left',
  width: '100%',
  height: '100vh',
  //   animation: `${slideInAnimation} 1s forwards`,
}));

export const PicBoxCont = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: `rgba(0, 0, 0, 0.0)`,
  position: 'absolute',
  top: '35%',
  left: '16.85%',
  color: '#fff',
  fontWeight: 900,
  fontSize: '80px',
  textAlign: 'left',
  //   animation: `${slideInAnimation} 1s forwards`,
}));

export const PicBoxTextCont = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: `rgba(0, 0, 0, 0.0)`,
  position: 'absolute',
  top: '35%',
  left: '16.85%',
  color: '#fff',
  fontWeight: 900,
  fontSize: '80px',
  textAlign: 'left',
  //   animation: `${slideInAnimation} 1s forwards`,
}));

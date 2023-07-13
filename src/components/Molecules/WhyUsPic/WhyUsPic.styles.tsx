import { styled, keyframes } from '@mui/system';
import { Box, BoxProps } from '@mui/material';
import { makeStyles } from '@mui/system';

const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const dissAppearAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const useStyles = makeStyles(() => ({
  firstPic: {
    backgroundImage: `url("https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")`,
  },
  secPic: {
    backgroundImage: `url("https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")`,
  },
  thirdPic: {
    backgroundImage: `url("https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")`,
  },
}));

export const PicBox = styled(Box)<BoxProps>(({ theme }) => ({
  color: '#fff',
  position: 'relative',
  textAlign: 'left',
  width: '400px',
  height: '570px',
  backgroundSize: 'cover',
}));

export const PicBoxCont = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100%',
  width: '100%',
  color: '#fff',
  fontSize: '2vw',
  opacity: '0%',
  transition: 'all 0.5s linear',
  // animation: `${dissAppearAnimation} 0.5s forwards`,

  '&:hover': {
    opacity: '100%',
    // animation: `${dissAppearAnimation} 0.5s backwards`,
    background:
      'linear-gradient(180deg, rgba(10,0,176,0) 0%, rgba(255,255,255,0) 49%, rgba(0,0,0,1) 100%)',
  },
}));

export const PicBoxTextCont = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '27px',
  position: 'absolute',
  bottom: '8%',
  left: '8%',
  maxWidth: '330px',
  textAlign: 'left',
  lineHeight: '34px',
  fontWeight: 300,
  // animation: `${slideInAnimation} 0.5s forwards`,
}));

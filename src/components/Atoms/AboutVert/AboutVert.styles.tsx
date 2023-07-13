import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import Photo from '../../../static/aboutTruck.jpg';
export const AboutVertBox = styled(Box)<BoxProps>(({ theme }) => ({
  // width: '100%',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
}));

export const ImgBox = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100%',
  width: '450px',
  marginLeft: '70px',
  backgroundPosition: 'center',
  backgroundImage: `url("https://images.unsplash.com/photo-1506306460327-3164753b74c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")`,
}));

export const ImgOnBox = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100%',
  width: '100%',
  background: 'rgba(255,255,255,0.1)',
  opacity: '100%',
  transition: 'all 0.3s linear',
  position: 'relative',
  '&:hover': {
    opacity: '100%',
  },
}));

export const ImgOnBoxText = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '27px',
  position: 'absolute',
  top: '90%',
  left: '20%',
  transform: 'translate(-50%, -50%)',
  fontWeight: '500',
}));

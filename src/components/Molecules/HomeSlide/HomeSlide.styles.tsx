import { styled } from '@mui/material/styles';
import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  // backgroundColor: 'pink',
  // border: '5px solid black',
  // width: '75%',
  margin: '0 auto',
}));

export const ModernPicBox = styled(Box)<BoxProps & { src?: string }>(
  ({ theme, src }) => ({
    width: '75.3%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center',
    transform: 'scaleX(-1)',
    marginTop: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  })
);

export const ModernPicBoxIns = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  backgroundColor: `rgba(255, 255, 255, 0.1)`,
  justifyContent: 'left',
  alignItems: 'end',
  paddingBottom: '70px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.primary.main,
  transform: 'scaleX(-1)',
  fontSize: '60px',
  paddingLeft: '75px',
  fontWeight: '900',
}));

import { styled } from '@mui/material/styles';
import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';

export const ModernPicBox = styled(Box)(({ theme }) => ({
  width: '75.3%',
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(https://images.unsplash.com/photo-1578727412900-e41cffc5074a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'left center',
  transform: 'scaleX(-1)',
  marginTop: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const ModernPicBoxIns = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  backgroundColor: `rgba(255, 255, 255, 0.1)`,
  justifyContent: 'left',
  alignItems: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.primary.main,
  transform: 'scaleX(-1)',
  fontSize: '100px',
  paddingLeft: '75px',
  fontWeight: '900',
}));

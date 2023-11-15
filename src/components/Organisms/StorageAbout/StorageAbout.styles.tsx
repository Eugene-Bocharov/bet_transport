import styled from 'styled-components';
import { Typography, TypographyProps } from '@mui/material';

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&& ': {
    color: '#000',
    // marginTop: '100px',
    fontSize: '45px',
  },
}));

export const Text = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&& ': {
    color: '#000',
    marginTop: '100px',
    fontSize: '20px',
    // maxWidth: '50%',
  },
}));

import { Box, BoxProps } from '@mui/material';

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '200px',
}));

export const Divider = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
}));

export const ImgBox = styled(Box)<BoxProps>(({ theme }) => ({
  height: '450px',
  width: '450px',
  marginLeft: '70px',
  backgroundPosition: 'left center',
  backgroundImage: `url("https://i.ibb.co/Sn0H3cP/Lm53t2.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

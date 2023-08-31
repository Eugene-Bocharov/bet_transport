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
}));

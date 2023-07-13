import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material/';
import trucksVid from '../../../static/trucksVid.mp4';

import { HomeVidStyledProps } from './HomeVid.behavior';

export const HomeVidStyledMax = styled('video')<HomeVidStyledProps>(
  ({ theme }) => ({
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  })
);

export const HomeVidStyledMin = styled('video')<HomeVidStyledProps>(
  ({ theme }) => ({
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  })
);

export const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
}));

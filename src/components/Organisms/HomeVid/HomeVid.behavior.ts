import { styled, Theme, SxProps } from '@mui/system';
import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

export interface HomeVidStyledProps extends BoxProps<'video'> {
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export interface HomeVidProps {
  children?: ReactNode;
}

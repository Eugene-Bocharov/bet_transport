import styled from 'styled-components';
import { Typography, TypographyProps, Link, LinkProps } from '@mui/material';

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

export const TopContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '85%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '200px',
  // backgroundColor: 'pink',
}));

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  // flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '150px',
  marginBottom: '50px',
  // transform: 'rotateY(180deg)',
}));

export const ContainerCol = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  // backgroundColor: 'violet',
  flexDirection: 'column-reverse',
  width: '450px',
  // marginTop: '200px',
}));

export const ContainerReverse = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '150px',
  marginBottom: '50px',
  // transform: 'rotateY(180deg)',
}));

export const Divider = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  // width: '50%',
}));

export const DividerGC = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
}));

export const DividerHalf = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  // transform: 'rotateX(180deg)',
}));

export const ImgBox = styled(Box)<BoxProps & { src?: string; pos?: number }>(
  ({ theme, src, pos }) => ({
    height: '450px',
    width: '450px',
    backgroundPosition: `${pos}%`,
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
  })
);

export const ButtonLink = styled(Link)<LinkProps>(({ theme }) => ({
  '&& ': {
    color: '#fff',
    marginTop: '30px',
    fontSize: '20px',
    backgroundColor: '#008080',
    maxWidth: '280px',
    height: '40px',
    alignItems: 'center',
    paddingTop: '15px',
    borderRadius: '20px',
    textDecoration: 'none',
    textAlign: 'center',
  },
}));

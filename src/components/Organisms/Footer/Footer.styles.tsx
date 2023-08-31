import styled from 'styled-components';

import { Box, BoxProps } from '@mui/material';
import { color } from 'framer-motion';

export const FooterBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: '#000',
  marginTop: '200px',
  marginBottom: '0',
  padding: 0,
  width: '100%',
  height: '50vh',
}));

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  width: '60%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  //   alignItems: 'center',
  //   backgroundColor: '#821',
  color: '#fff',
  //   justifyContent: 'space-between',
}));

export const Divider = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '100px',
}));

export const ContainerCop = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  height: '80px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  justifyContent: 'center',
}));

import { Typography, TypographyProps } from '@mui/material';

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: '#fff',
  fontSize: '50px',
  marginTop: '50px',
  '&& ': {
    color: '#fff',
    marginTop: '100px',
    fontSize: '45px',
  },
}));

import { Link as RouterLink } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';

export const CustomLink = styled(RouterLink)<LinkProps>(({ theme }) => ({
  color: '#fff',
  fontSize: '20px',
  marginTop: '100px',
  textDecoration: 'none',
  marginRight: '20px',
  backgroundColor: '#000',
  height: '60px',
  width: '250px',
  borderRadius: '15px',
  border: '3px solid #fff',
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ListBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: '60%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  //   alignItems: 'center',
  //   backgroundColor: '#821',
  color: '#fff',
  flexDirection: 'column',
}));

export const ListLink = styled(RouterLink)<LinkProps>(({ theme }) => ({
  textDecoration: 'none',
  marginBottom: '10px',
  color: '#c4c4c4',
  '&:hover': {
    color: '#fff',
  },
}));

export const LinkBoxTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: '#fff',
    fontSize: '50px',
    marginBottom: '10px',
    '&& ': {
      color: '#fff',
      fontSize: '23px',
      marginBottom: '10px',
    },
  })
);

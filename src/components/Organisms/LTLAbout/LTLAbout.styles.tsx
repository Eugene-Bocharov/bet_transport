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

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '70%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '150px',
  marginBottom: '50px',
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
  width: '50%',
}));

export const ImgBox = styled(Box)<BoxProps>(({ theme }) => ({
  height: '450px',
  width: '450px',
  backgroundPosition: 'center',
  backgroundImage: `url("https://i.ibb.co/nbLgtmf/IEw7zM.jpg")`,
  backgroundSize: 'cover',
}));

export const ImgBox2 = styled(Box)<BoxProps>(({ theme }) => ({
  height: '450px',
  width: '450px',
  backgroundPosition: 'center',
  backgroundImage: `url("https://i.ibb.co/VH1wFzm/QP4YoT.jpg:")`,
  backgroundSize: 'cover',
}));

export const ImgBox3 = styled(Box)<BoxProps>(({ theme }) => ({
  height: '450px',
  width: '450px',
  backgroundPosition: 'center',
  backgroundImage: `url("https://i.ibb.co/j6JjjQQ/CMyGdt.jpg")`,
  backgroundSize: 'cover',
}));

export const ImgBox4 = styled(Box)<BoxProps>(({ theme }) => ({
  height: '450px',
  width: '450px',
  backgroundPosition: 'center',
  backgroundImage: `url("https://i.ibb.co/7bQrzbj/8Vsmom.jpg")`,
  backgroundSize: 'cover',
}));

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

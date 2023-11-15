import styled from 'styled-components';
import { Typography, TypographyProps, Link, LinkProps } from '@mui/material';

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&& ': {
    color: '#000',
    // marginTop: '100px',
    fontSize: '45px',
  },
}));

export const CustomLink = styled(Typography).attrs<
  TypographyProps & { href: string }
>(({ theme, href }) => ({
  component: 'a',
  href,
}))<TypographyProps & { href: string }>`
  && {
    backgroundColor: '#000',
    color: #000;
    text-decoration: none;
    font-size: 45px;
    // Add other styles as needed
  }
`;
export const Text = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&& ': {
    color: '#000',
    marginTop: '100px',
    fontSize: '20px',
    // maxWidth: '50%',
  },
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

import { Box, BoxProps } from '@mui/material';

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
  // transform: 'rotateX(180deg)',
}));

export const ImgBox = styled(Box)<BoxProps>(({ theme }) => ({
  height: '450px',
  width: '450px',
  // marginLeft: '70px',
  backgroundPosition: 'center',
  backgroundImage: `url("https://i.ibb.co/nbLgtmf/IEw7zM.jpg")`,
  backgroundSize: 'cover',
}));

export const ImgBox2 = styled(Box)<BoxProps>(({ theme }) => ({
  height: '450px',
  width: '450px',
  // marginLeft: '70px',
  backgroundPosition: 'center',
  backgroundImage: `url("https://i.ibb.co/nbLgtmf/IEw7zM.jpg")`,
  backgroundSize: 'cover',
}));

export const ImgBox3 = styled(Box)<BoxProps>(({ theme }) => ({
  height: '450px',
  width: '450px',
  // marginLeft: '70px',
  backgroundPosition: 'center',
  backgroundImage: `url("https://i.ibb.co/nbLgtmf/IEw7zM.jpg")`,
  backgroundSize: 'cover',
}));

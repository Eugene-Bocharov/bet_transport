import styled from 'styled-components';
import { Typography, TypographyProps, Link, LinkProps } from '@mui/material';

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  '&& ': {
    color: '#000',
    // marginTop: '100px',
    fontSize: '38px',
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
    marginTop: '40px',
    fontSize: '20px',
    fontWeight: '500',
    // lineHeight: '45px',
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

export const TopContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '85%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '200px',
  // backgroundColor: 'pink',
}));

export const ContainerCol = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  // backgroundColor: 'violet',
  flexDirection: 'column-reverse',
  width: '450px',
  // marginTop: '200px',
}));

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  // flexDirection: 'row-reverse',
  // backgroundColor: 'pink',
  justifyContent: 'space-between',
  width: '75%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '200px',
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

export const ImgBox = styled(Box)<BoxProps & { src?: string; pos?: number }>(
  ({ theme, src, pos }) => ({
    height: '450px',
    width: '450px',
    backgroundPosition: `${pos}%`,
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
  })
);

export const DividerCol = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  // width: '50%',
}));

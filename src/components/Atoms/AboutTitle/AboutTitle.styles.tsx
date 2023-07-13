import { styled, keyframes } from '@mui/material/styles';
import { Typography, TypographyProps, Box, BoxProps } from '@mui/material';

const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutTitleStyled = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    backgroundColor: `rgba(0, 0, 0, 0.0)`,
    color: theme.palette.secondary.main,
    fontWeight: 900,
    fontSize: '80px',
    textAlign: 'left',
  })
);

export const AboutTitleLight = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    backgroundColor: `rgba(0, 0, 0, 0.0)`,
    color: theme.palette.secondary.dark,
    fontWeight: 900,
    fontSize: '80px',
    textAlign: 'left',
    marginLeft: '20px',
  })
);

export const AboutTitleBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px',
}));

export const AboutTitleBoxDivider = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
}));

export const AboutTitleDesc = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginTop: '50px',
    color: theme.palette.secondary.main,
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '45px',
  })
);

export const AboutTitleDescLight = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: theme.palette.secondary.dark,
    fontWeight: 500,
    fontSize: '40px',
  })
);

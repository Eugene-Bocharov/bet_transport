import { styled, keyframes } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';

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

export const HomeTitleStyled = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    backgroundColor: `rgba(0, 0, 0, 0.0)`,
    position: 'absolute',
    top: '35%',
    left: '16.85%',
    color: '#fff',
    fontWeight: 900,
    fontSize: '80px',
    textAlign: 'left',
    animation: `${slideInAnimation} 1s forwards`,
  })
);

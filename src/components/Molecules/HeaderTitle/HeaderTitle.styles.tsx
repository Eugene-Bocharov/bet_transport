import { styled } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';

export const HeaderTitleText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontSize: '28px',
    fontWeight: '600',
    color: theme.palette.text.primary,
    letterSpacing: '0.05em',
    lineHeight: '1.2em',
    fontFamily: theme.typography.fontFamily,
    minWidth: '250px',
  })
);

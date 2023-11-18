import { styled } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';

export const StorageTxtStyled = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    '&& ': {
      color: '#000',
      marginTop: '100px',
      fontSize: '23px',
      maxWidth: '75%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
);

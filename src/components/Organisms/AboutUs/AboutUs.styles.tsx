import { styled } from '@mui/material/styles';
import { Box, BoxProps, ModalRoot } from '@mui/material';

export const AboutUsBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: '75%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

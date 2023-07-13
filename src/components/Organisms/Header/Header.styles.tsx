import { styled } from '@mui/material/styles';
import { AppBar, AppBarProps } from '@mui/material';

export const HeaderBox = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  height: '80px',
  paddingLeft: '17%',
  paddingRight: '17%',
  boxShadow: 'none',
}));

export const HeaderBoxClear = styled(AppBar)<AppBarProps>(({ theme }) => ({
  filter: 'invert(100%)',
  backgroundColor: `rgba(0, 0, 0, 0.0)`,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  height: '110px',
  paddingLeft: '17%',
  paddingRight: '17%',
  boxShadow: 'none',
}));

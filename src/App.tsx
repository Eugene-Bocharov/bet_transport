import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

declare module '@mui/material/styles' {
  interface TypeText {
    black: string;
    grayBorder: string;
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
      light: '#ADE4DB',
      dark: '#008080',
    },
    background: {
      default: '#fff',
    },
    text: {
      grayBorder: '#979797',
      primary: '#000',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: '"Ubuntu", sans-serif',
  },
});

function App() {
  return (
    <>
      {' '}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

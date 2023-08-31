import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HomePage } from './pages/HomePage/HomePage';
import { StoragePage } from './pages/StoragePage/StoragePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { MovingPage } from './pages/MovingPage/MovingPage';
import { LTLPage } from './pages/LTLPage/LTLPage';

import { useTranslation } from 'react-i18next';
import './i18n'; // Import the i18n configuration
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Organisms/Header/Header';

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
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/storage" element={<StoragePage />} />
            <Route path="/moving" element={<MovingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/LTL" element={<LTLPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

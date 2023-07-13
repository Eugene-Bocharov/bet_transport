import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import { HeaderBox, HeaderBoxClear } from './Header.styles';
import { HeaderTitle } from '../../Molecules/HeaderTitle/HeaderTitle';
import { HeaderLinks } from '../../Molecules/HeaderLinks/HeaderLinks';
import { HeaderButton } from '../../Atoms/HeaderButton/HeaderButton';

interface Props {
  window?: () => Window;
  children: any;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 320 ||
        document.documentElement.scrollTop > 320
      ) {
        console.log(document.documentElement.scrollTop);

        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.onscroll = scrollFunction;

    // Clean up the event listener when the component unmounts
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      {isScrolled === false ? (
        <HideOnScroll {...props}>
          <HeaderBoxClear>
            <HeaderTitle />
            <HeaderLinks />
            <HeaderButton />
          </HeaderBoxClear>
        </HideOnScroll>
      ) : (
        <HideOnScroll {...props}>
          <HeaderBox>
            <HeaderTitle />
            <HeaderLinks />
            <HeaderButton />
          </HeaderBox>
        </HideOnScroll>
      )}
    </>
  );
};

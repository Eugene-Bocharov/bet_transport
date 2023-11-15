import React from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HomeVid } from '../../components/Organisms/HomeVid/HomeVid';

import { HomeTitle } from '../../components/Atoms/HomeTitle/HomeTitle';
import { AboutUs } from '../../components/Organisms/AboutUs/AboutUs';
import { MovingPic } from '../../components/Molecules/MovingPic/MovingPic';
import { ShortDesc } from '../../components/Molecules/ShortDesc/ShortDesc';
import { WhyUs } from '../../components/Organisms/WhyUs/WhyUs';
import { margin } from '@mui/system';
import { Footer } from '../../components/Organisms/Footer/Footer';

import { MovingAbout } from '../../components/Organisms/MovingAbout/MovingAbout';

export function MovingPage() {
  return (
    <>
      <Header isFullWhite>
        <p>не має тут бути</p>
      </Header>
      {/* Fix the style attribute */}
      <MovingPic />
      <MovingAbout />
      <Footer />
    </>
  );
}

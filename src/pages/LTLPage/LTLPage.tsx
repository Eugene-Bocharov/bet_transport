import React from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HomeVid } from '../../components/Organisms/HomeVid/HomeVid';

import { HomeTitle } from '../../components/Atoms/HomeTitle/HomeTitle';
import { AboutUs } from '../../components/Organisms/AboutUs/AboutUs';
import { LTLPic } from '../../components/Molecules/LTLPic/LTLPic';
import { ShortDesc } from '../../components/Molecules/ShortDesc/ShortDesc';
import { WhyUs } from '../../components/Organisms/WhyUs/WhyUs';
import { margin } from '@mui/system';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { LTLAbout } from '../../components/Organisms/LTLAbout/LTLAbout';

export function LTLPage() {
  return (
    <>
      <Header isFullWhite>
        <p>не має тут бути</p>
      </Header>
      <LTLPic />
      {/* Fix the style attribute */}
      <LTLAbout />
      <Footer />
    </>
  );
}

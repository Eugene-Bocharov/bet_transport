import React from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HomeVid } from '../../components/Organisms/HomeVid/HomeVid';

import { HomeTitle } from '../../components/Atoms/HomeTitle/HomeTitle';
import { AboutUs } from '../../components/Organisms/AboutUs/AboutUs';
import { ModernPic } from '../../components/Molecules/ModernPic/ModernPic';
import { ShortDesc } from '../../components/Molecules/ShortDesc/ShortDesc';
import { WhyUs } from '../../components//Organisms/WhyUs/WhyUs';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { SimpleSlider } from '../../components/Molecules/HomeSlide/HomeSlide';
import { HomeAbout } from '../../components/Organisms/HomeAbout/HomeAbout';
export function HomePage() {
  return (
    <>
      <Header>
        <h1>не має тут бути</h1>
      </Header>
      <HomeVid>
        <HomeTitle />
      </HomeVid>
      {/* <ShortDesc /> */}
      <SimpleSlider />
      <HomeAbout />
      <AboutUs />
      <ModernPic />
      <WhyUs />
      <Footer />
    </>
  );
}

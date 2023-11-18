import React from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HomeVid } from '../../components/Organisms/HomeVid/HomeVid';

import { HomeTitle } from '../../components/Atoms/HomeTitle/HomeTitle';
import { AboutUs } from '../../components/Organisms/AboutUs/AboutUs';
import { StoragePic } from '../../components/Molecules/StoragePic/StoragePic';
import { ShortDesc } from '../../components/Molecules/ShortDesc/ShortDesc';
import { WhyUs } from '../../components/Organisms/WhyUs/WhyUs';
import { margin } from '@mui/system';
import { StorageTxt } from '../../components/Molecules/StorageTxt/StorageTxt';
import { Footer } from '../../components/Organisms/Footer/Footer';

import { StorageAbout } from '../../components/Organisms/StorageAbout/StorageAbout';

export function StoragePage() {
  return (
    <>
      <Header isFullWhite>
        <p>не має тут бути</p>
      </Header>
      <StoragePic />
      <StorageTxt />
      {/* Fix the style attribute */}
      <StorageAbout />
      <Footer />
    </>
  );
}

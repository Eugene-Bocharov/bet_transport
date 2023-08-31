import React from 'react';
import { Header } from '../../components/Organisms/Header/Header';
import { HomeVid } from '../../components/Organisms/HomeVid/HomeVid';

import { HomeTitle } from '../../components/Atoms/HomeTitle/HomeTitle';
import { AboutUs } from '../../components/Organisms/AboutUs/AboutUs';
import { ModernPic } from '../../components/Molecules/ModernPic/ModernPic';
import { ShortDesc } from '../../components/Molecules/ShortDesc/ShortDesc';
import { WhyUs } from '../../components/Organisms/WhyUs/WhyUs';
import { margin } from '@mui/system';

import { StorageAbout } from '../../components/Organisms/StorageAbout/StorageAbout';

export function StoragePage() {
  return (
    <>
      <Header isFullWhite>
        <p>не має тут бути</p>
      </Header>
      {/* Fix the style attribute */}
      <StorageAbout />
    </>
  );
}

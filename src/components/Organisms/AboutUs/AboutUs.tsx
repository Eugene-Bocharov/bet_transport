import React from 'react';

import { AboutUsBox } from './AboutUs.styles';

import { AboutTitle } from '../../Atoms/AboutTitle/AboutTitle';
import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
export const AboutUs: React.FC = () => {
  return (
    <>
      <AboutUsBox>
        <AboutTitle />
        <AboutVert />
      </AboutUsBox>
    </>
  );
};

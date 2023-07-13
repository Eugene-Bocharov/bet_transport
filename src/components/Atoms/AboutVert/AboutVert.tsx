import React from 'react';

import {
  AboutVertBox,
  ImgBox,
  ImgOnBoxText,
  ImgOnBox,
} from './AboutVert.styles';
import Photo from '../../../static/aboutTruck.jpg';
import { CardMedia } from '@mui/material';

export const AboutVert = () => {
  return (
    <>
      <AboutVertBox>
        <ImgBox>
          <ImgOnBox>
            <ImgOnBoxText>BET Trucks</ImgOnBoxText>
          </ImgOnBox>
        </ImgBox>
      </AboutVertBox>
    </>
  );
};

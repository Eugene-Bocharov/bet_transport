import React from 'react';

import { ModernPicBox, ModernPicBoxIns } from './MovingPic.styles';
import { images } from '../../../static/exports';
export const MovingPic: React.FC = () => {
  return (
    <>
      <ModernPicBox src={images.Foto20}>
        <ModernPicBoxIns></ModernPicBoxIns>
      </ModernPicBox>
    </>
  );
};

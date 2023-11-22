import React from 'react';

import { ModernPicBox, ModernPicBoxIns } from './LTLPic.styles';
import { images } from '../../../static/exports';
export const LTLPic: React.FC = () => {
  return (
    <>
      <ModernPicBox src={images.Foto14}>
        <ModernPicBoxIns></ModernPicBoxIns>
      </ModernPicBox>
    </>
  );
};

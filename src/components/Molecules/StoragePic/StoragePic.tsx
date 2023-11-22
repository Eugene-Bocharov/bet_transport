import React from 'react';

import { ModernPicBox, ModernPicBoxIns } from './StoragePic.styles';
import { images } from '../../../static/exports';

export const StoragePic: React.FC = () => {
  return (
    <>
      <ModernPicBox src={images.Foto25}>
        <ModernPicBoxIns></ModernPicBoxIns>
      </ModernPicBox>
    </>
  );
};

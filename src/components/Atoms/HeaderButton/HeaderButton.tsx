import React from 'react';

import { HeaderButtonStyled } from './HeaderButton.styles';

export const HeaderButton: React.FC = () => {
  return (
    <>
      <HeaderButtonStyled to={'/storage'}>Contact</HeaderButtonStyled>
    </>
  );
};

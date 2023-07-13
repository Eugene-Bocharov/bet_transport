import React from 'react';

import { HeaderLinksBox } from './HeaderLinks.styles';

import { HeaderLink } from '../../Atoms/HeaderLink/HeaderLink';

export const HeaderLinks: React.FC = () => {
  return (
    <>
      <HeaderLinksBox>
        <HeaderLink title="Home" link="/home" />
        <HeaderLink title="About" link="/about" />
        <HeaderLink title="About" link="/about" />
        <HeaderLink title="About" link="/about" />
      </HeaderLinksBox>
    </>
  );
};

import React from 'react';
import { LinkStyled } from './HeaderLink.styles';
import { HeaderLinkProps } from './HeaderLink.behavior';

export const HeaderLink: React.FC<HeaderLinkProps> = ({ title, link }) => {
  return <LinkStyled to={link}>{title}</LinkStyled>;
};

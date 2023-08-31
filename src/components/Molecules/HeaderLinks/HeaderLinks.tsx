import React from 'react';

import { HeaderLinksBox } from './HeaderLinks.styles';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

import { HeaderLink } from '../../Atoms/HeaderLink/HeaderLink';
import { ButtonStyled } from './HeaderLinks.styles';

export const HeaderLinks: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <HeaderLinksBox>
        <HeaderLink
          title={t('home')}
          link="/
        "
        />
        <HeaderLink title={t('storage')} link="/storage" />
        <HeaderLink title={t('moving')} link="/moving" />
        <HeaderLink title={t('LTL')} link="/LTL" />
        <HeaderLink title={t('contact')} link="/contact" />
        {i18n.language === 'en' ? (
          <ButtonStyled onClick={() => changeLanguage('fr')}>
            Français
          </ButtonStyled>
        ) : (
          <ButtonStyled onClick={() => changeLanguage('en')}>
            English
          </ButtonStyled>
        )}
      </HeaderLinksBox>
    </>
  );
};

import React from 'react';

import { HomeTitleStyled } from './HomeTitle.styles';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const HomeTitle = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <HomeTitleStyled>
        BET Transport <br /> {t('fastDescription')}
      </HomeTitleStyled>
    </>
  );
};

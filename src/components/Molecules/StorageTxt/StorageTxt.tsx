import React from 'react';

import { StorageTxtStyled } from './StorageTxt.styles';
import { useTranslation } from 'react-i18next';
export const StorageTxt: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <StorageTxtStyled>{t('betIsMore')}</StorageTxtStyled>
    </>
  );
};

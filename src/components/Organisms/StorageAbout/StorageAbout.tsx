import React from 'react';

import { Title, Text, Divider, ImgBox, Container } from './StorageAbout.styles';
import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const StorageAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Container>
        <Divider>
          <Title>{t('storage')}</Title>
          <Text>{t('storageAbout')}</Text>
        </Divider>
        <ImgBox />
      </Container>
    </>
  );
};

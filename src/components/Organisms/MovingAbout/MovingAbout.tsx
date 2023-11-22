import React, { useEffect, useState } from 'react';

import {
  Title,
  Text,
  ImgBox,
  Divider,
  Container,
  ContainerReverse,
  ButtonLink,
} from './MovingAbout.styles';

import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
import { images } from '../../../static/exports';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const MovingAbout = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <ContainerReverse>
        <Divider>
          <Title>{t('moving')}</Title>
          <Text>{t('movingT1')}</Text>
        </Divider>
        <ImgBox src={images.Foto21} />
      </ContainerReverse>
      <Container>
        <Divider>
          <Text>{t('movingT2')}</Text>
        </Divider>
        <ImgBox src={images.Foto22} />
      </Container>
      <ContainerReverse>
        <Divider>
          <Text>{t('movingT3')}</Text>
        </Divider>
        <ImgBox src={images.Foto23} />
      </ContainerReverse>
      <Container>
        <Divider>
          <Text>{t('movingT4')}</Text>
          <ButtonLink href="https://example.com">{t('getAquote')}</ButtonLink>
        </Divider>
        <ImgBox src={images.Foto10} />
      </Container>
    </>
  );
};

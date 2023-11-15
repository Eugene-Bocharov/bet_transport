import React from 'react';

import {
  Title,
  Text,
  ImgBox,
  ImgBox2,
  ImgBox3,
  Divider,
  Container,
  ContainerReverse,
  ButtonLink,
} from './MovingAbout.styles';
import { AboutVert } from '../../Atoms/AboutVert/AboutVert';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const MovingAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ContainerReverse>
        <Divider>
          {/* <Title>{t('moving')}</Title> */}
          <Text>{t('movingT1')}</Text>
        </Divider>
        <ImgBox />
      </ContainerReverse>
      <Container>
        <Divider>
          <Text>{t('movingT2')}</Text>
        </Divider>
        <ImgBox2 />
      </Container>
      <ContainerReverse>
        <Divider>
          <Text>{t('movingT3')}</Text>
        </Divider>
        <ImgBox3 />
      </ContainerReverse>
      <Container>
        <Divider>
          <Text>{t('movingT4')}</Text>
          <ButtonLink href="https://example.com">Get a Quote</ButtonLink>
        </Divider>
        <ImgBox2 />
      </Container>
    </>
  );
};

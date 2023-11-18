import React from 'react';

import {
  Title,
  Text,
  TopContainer,
  Divider,
  ButtonLink,
  ImgBox,
  Container,
  DividerHalf,
  ImgBox2,
  ContainerReverse,
  ContainerCol,
} from './StorageAbout.styles';
import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const StorageAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <TopContainer>
        <ContainerCol>
          <Divider>
            {/* <Title>{t('storage')}</Title> */}
            <Text>{t('storageAbout')}</Text>
          </Divider>
          <ImgBox />
        </ContainerCol>
        <ContainerCol>
          <Divider>
            {/* <Title>{t('storage')}</Title> */}
            <Text>{t('storageAbout')}</Text>
          </Divider>
          <ImgBox />
        </ContainerCol>
        <ContainerCol>
          <Divider>
            {/* <Title>{t('storage')}</Title> */}
            <Text>{t('storageAbout')}</Text>
          </Divider>
          <ImgBox />
        </ContainerCol>
      </TopContainer>
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

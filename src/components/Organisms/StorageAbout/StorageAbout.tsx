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
  ContainerReverse,
  ContainerCol,
  DividerGC,
} from './StorageAbout.styles';
import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
import { useTranslation } from 'react-i18next';
import { images } from '../../../static/exports';
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
          <ImgBox src={images.Foto11} pos={0} />
        </ContainerCol>
        <ContainerCol>
          <Divider>
            {/* <Title>{t('storage')}</Title> */}
            <Text>{t('storageAbout')}</Text>
          </Divider>
          <ImgBox src={images.Foto12} pos={45} />
        </ContainerCol>
        <ContainerCol>
          <Divider>
            {/* <Title>{t('storage')}</Title> */}
            <Text>{t('storageAbout')}</Text>
          </Divider>
          <ImgBox src={images.Foto13} pos={50} />
        </ContainerCol>
      </TopContainer>
      <Container>
        <DividerGC>
          <Text>{t('movingT4')}</Text>
          <ButtonLink href="https://example.com">{t('getAquote')}</ButtonLink>
        </DividerGC>
        <ImgBox src={images.Foto10} pos={50} />
      </Container>
    </>
  );
};

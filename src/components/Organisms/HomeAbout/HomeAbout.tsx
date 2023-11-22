import React, { useEffect, useState } from 'react';

import {
  Title,
  Text,
  ImgBox,
  Divider,
  Container,
  TopContainer,
  DividerCol,
  ContainerCol,
  ContainerReverse,
  ButtonLink,
} from './HomeAbout.styles';

import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
import { images } from '../../../static/exports';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const HomeAbout = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Container>
        <Divider>
          <Title>Professional services with experience</Title>
          <Text>
            BET Transport is Montreal based Transportation Company providing
            exemplary service from the point of departure to the point of
            arrival. We transport all types of goods, we strive to provide our
            clients with the best possible logistics and transportation service,
            offering solutions adapted to their specific needs. Also Transport
            BET offers storage space to meet all of your warehousing needs end
            our moving division provides the best service in the Greater
            Montreal area.
          </Text>
          <ButtonLink href="https://example.com">{t('contactus')}</ButtonLink>
        </Divider>
        <ImgBox src={images.Foto7} pos={15} />
      </Container>
      <TopContainer>
        <ContainerCol>
          <DividerCol>
            {/* <Title>{t('storage')}</Title> */}
            <Text>{t('storageAbout')}</Text>
          </DividerCol>
          <ImgBox src={images.Foto4} pos={60} />
        </ContainerCol>
        <ContainerCol>
          <DividerCol>
            {/* <Title>{t('storage')}</Title> */}
            <Text>{t('storageAbout')}</Text>
          </DividerCol>
          <ImgBox src={images.Foto5} pos={45} />
        </ContainerCol>
        <ContainerCol>
          <DividerCol>
            {/* <Title>{t('storage')}</Title> */}
            <Text>{t('storageAbout')}</Text>
          </DividerCol>
          <ImgBox src={images.Foto6} pos={50} />
        </ContainerCol>
      </TopContainer>
    </>
  );
};

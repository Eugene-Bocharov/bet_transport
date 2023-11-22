import React from 'react';

import {
  Title,
  ImgBox,
  ContainerReverse,
  Text,
  Divider,
  ButtonLink,
  Container,
} from './LTLAbout.styles';
import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import { images } from '../../../static/exports';

export const LTLAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ContainerReverse>
        <Divider>
          <Title>{t('LTLTitle')}</Title>
          <Text>{t('LTLAbout')}</Text>
        </Divider>
        <ImgBox src={images.Foto15} />
      </ContainerReverse>
      <Container>
        <Divider>
          <Title>{t('FTLTitle')}</Title>
          <Text>{t('FTL')}</Text>
        </Divider>
        <ImgBox src={images.Foto16} />
      </Container>
      <ContainerReverse>
        <Divider>
          <Title>{t('SDTTitle')}</Title>
          <Text>{t('SDTAbout')}</Text>
        </Divider>
        <ImgBox src={images.Foto17} />
      </ContainerReverse>
      <Container>
        <Divider>
          <Title>{t('TCTTitle')}</Title>
          <Text>{t('TCT')}</Text>
        </Divider>
        <ImgBox src={images.Foto18} />
      </Container>
      <ContainerReverse>
        <Divider>
          <Text>{t('movingT4')}</Text>
          <ButtonLink href="https://example.com">{t('getAquote')}</ButtonLink>
        </Divider>
        <ImgBox src={images.Foto10} />
      </ContainerReverse>
    </>
  );
};

import React from 'react';

import {
  Title,
  ImgBox,
  ImgBox2,
  ImgBox3,
  ImgBox4,
  Text,
  Divider,
  Container,
} from './LTLAbout.styles';
import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const LTLAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Container>
        <Divider>
          <Title>{t('LTLTitle')}</Title>
          <Text>{t('LTLAbout')}</Text>
        </Divider>
        <ImgBox />
      </Container>
      <Container>
        <Divider>
          <Title>{t('FTLTitle')}</Title>
          <Text>{t('FTL')}</Text>
        </Divider>
        <ImgBox2 />
      </Container>
      <Container>
        <Divider>
          <Title>{t('SDTTitle')}</Title>
          <Text>{t('SDTAbout')}</Text>
        </Divider>
        <ImgBox3 />
      </Container>
      <Container>
        <Divider>
          <Title>{t('TCTTitle')}</Title>
          <Text>{t('TCT')}</Text>
        </Divider>
        <ImgBox4 />
      </Container>
    </>
  );
};

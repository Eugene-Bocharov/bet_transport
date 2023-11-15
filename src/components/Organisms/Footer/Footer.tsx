import React from 'react';

import {
  FooterBox,
  Container,
  ContainerCop,
  Title,
  CustomLink,
  ListBox,
  ListLink,
  Divider,
  LinkBoxTitle,
} from './Footer.styles';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <FooterBox>
        <Container>
          <Divider>
            <Title>{t('rtwwu')}</Title>
            <CustomLink to="/contact">{t('contactus')}</CustomLink>
          </Divider>
          <Divider>
            <ListBox>
              <LinkBoxTitle>{t('service')}</LinkBoxTitle>
              <ListLink to="/storage">{t('storage')}</ListLink>
              <ListLink to="/moving">{t('moving')}</ListLink>
              <ListLink to="/LTL">{t('LTL')}</ListLink>
            </ListBox>
            <ListBox>
              <LinkBoxTitle>About</LinkBoxTitle>
              {/* <ListLink to="/contact">FAQ</ListLink> */}
              {/* <ListLink to="/contact">Privacy Policy</ListLink> */}
              <ListLink to="/contact">Documents</ListLink>
            </ListBox>
            <ListBox>
              <LinkBoxTitle>{t('contactinfo')}</LinkBoxTitle>
              <ListLink to="/#">+ 1 514 347 1715 </ListLink>
              <ListLink to="/#">bocharov.valerii@gmail.com</ListLink>
            </ListBox>
            <ListBox>
              <LinkBoxTitle>{t('socmedia')}</LinkBoxTitle>
              <ListLink to="/contact">Instagram</ListLink>
              <ListLink to="/contact">Facebook</ListLink>
              <ListLink to="/contact">Twitter</ListLink>
            </ListBox>
          </Divider>
        </Container>
        <ContainerCop>{t('copyright')}</ContainerCop>
      </FooterBox>
    </>
  );
};

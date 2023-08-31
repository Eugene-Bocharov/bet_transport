import React from 'react';

import { Title, Text, Divider, Container } from './LTLAbout.styles';
import { AboutVert } from '../../Atoms/AboutVert/AboutVert';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const LTLAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Container>
        <Divider>
          <Title>{t('LTLAbout')}</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsam nam iusto aspernatur autem laborum exercitationem rerum quae
            earum delectus fugiat, consectetur totam perspiciatis at hic cum
            voluptatem rem soluta. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam ipsam nam iusto aspernatur autem laborum
            exercitationem rerum quae earum delectus fugiat, consectetur totam
            perspiciatis at hic cum voluptatem rem soluta. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aperiam ipsam nam iusto
            aspernatur autem laborum exercitationem rerum quae earum delectus
            fugiat, consectetur totam perspiciatis at hic cum voluptatem rem
            soluta.
          </Text>
        </Divider>
        <AboutVert />
      </Container>
    </>
  );
};

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import {
  AboutTitleStyled,
  AboutTitleBox,
  AboutTitleLight,
  AboutTitleDesc,
  AboutTitleDescLight,
  AboutTitleBoxDivider,
} from './AboutTitle.styles';

export const AboutTitle = () => {
  const { t, i18n } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={textAnimation}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <AboutTitleBox>
          <AboutTitleBoxDivider>
            <AboutTitleStyled>{t('be')} </AboutTitleStyled>
            <AboutTitleLight>{t('fast')}</AboutTitleLight>
            <AboutTitleStyled>, </AboutTitleStyled>
            <AboutTitleLight>{t('smart')}</AboutTitleLight>
            <AboutTitleStyled>, </AboutTitleStyled>
            <AboutTitleLight>BET</AboutTitleLight>
          </AboutTitleBoxDivider>
          <AboutTitleDesc>{t('aboutInfo')}</AboutTitleDesc>
        </AboutTitleBox>
      </motion.div>
    </>
  );
};

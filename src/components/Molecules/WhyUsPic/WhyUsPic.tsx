import React from 'react';
import {
  useStyles,
  PicBox,
  PicBoxCont,
  PicBoxTextCont,
} from './WhyUsPic.styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const WhyUsPic = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const styles = useStyles();

  return (
    <>
      <PicBox className={styles.firstPic}>
        <PicBoxCont>
          <PicBoxTextCont>{t('whyusone')}</PicBoxTextCont>
        </PicBoxCont>
      </PicBox>
      <PicBox className={styles.secPic}>
        <PicBoxCont>
          <PicBoxTextCont>{t('whyustwo')}</PicBoxTextCont>
        </PicBoxCont>
      </PicBox>
      <PicBox className={styles.thirdPic}>
        <PicBoxCont>
          <PicBoxTextCont>{t('whyusthree')}</PicBoxTextCont>
        </PicBoxCont>
      </PicBox>
    </>
  );
};

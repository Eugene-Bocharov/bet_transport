import React from 'react';

import {
  useStyles,
  PicBox,
  PicBoxCont,
  PicBoxTextCont,
} from './WhyUsPic.styles';

export const WhyUsPic = () => {
  const styles = useStyles();

  return (
    <>
      <PicBox className={styles.firstPic}>
        <PicBoxCont>
          <PicBoxTextCont>
            Bridging distances between Canadian cities with our reliable and
            timely transport services
          </PicBoxTextCont>
        </PicBoxCont>
      </PicBox>
      <PicBox>
        <PicBoxCont>
          <PicBoxTextCont>
            Effortlessly move your cargo across Canada with our efficient and
            reliable transport solutions
          </PicBoxTextCont>
        </PicBoxCont>
      </PicBox>
      <PicBox>
        <PicBoxCont>
          <PicBoxTextCont>
            Simplify your nationwide distribution with our efficient transport
            services across Canada
          </PicBoxTextCont>
        </PicBoxCont>
      </PicBox>
    </>
  );
};

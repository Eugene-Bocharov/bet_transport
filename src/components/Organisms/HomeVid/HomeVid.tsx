import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import trucksVid from '../../../static/trucksVid.mp4';

import { HomeVidProps } from './HomeVid.behavior';
import {
  HomeVidStyledMax,
  HomeVidStyledMin,
  BoxStyled,
} from './HomeVid.styles';

export const HomeVid: React.FC<HomeVidProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth > 1700 ? (
        <>
          <BoxStyled>
            {children}
            <HomeVidStyledMin className="videoTag" autoPlay loop muted>
              <source src={trucksVid} type="video/mp4" />
            </HomeVidStyledMin>
          </BoxStyled>
        </>
      ) : (
        <>
          <BoxStyled>
            {children}
            <HomeVidStyledMax className="videoTag" autoPlay loop muted>
              <source src={trucksVid} type="video/mp4" />
            </HomeVidStyledMax>
          </BoxStyled>
        </>
      )}
    </>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, ModernPicBox, ModernPicBoxIns } from './HomeSlide.styles';
import { images } from '../../../static/exports';

const useStyles = makeStyles((theme) => ({
  // Add your styles if needed
}));

export const SimpleSlider: React.FC = () => {
  const swiper = useSwiper();
  const classes = useStyles();

  return (
    <Container>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className="res-slide">
          <ModernPicBox src={images.Foto25} />
        </SwiperSlide>
        <SwiperSlide>
          <ModernPicBox src={images.Foto23} />
        </SwiperSlide>
        <SwiperSlide>
          <ModernPicBox src={images.Foto22} />
        </SwiperSlide>
        <SwiperSlide>
          <ModernPicBox src={images.Foto12} />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-nav-btns">
        <button onClick={() => swiper.slidePrev()}>Prev</button>
        <button onClick={() => swiper.slideNext()}>Next</button>
      </div>
    </Container>
  );
};

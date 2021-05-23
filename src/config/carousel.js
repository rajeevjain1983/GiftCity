// 9fbef606107a605d69c0edbcd8029e5d 
import mediaQuery from '../../styles/themes/TTheme';

export default {
  CAROUSEL_OPTIONS: {
    autoplaySpeed: 6000,
    speed: 500,
  },
  CAROUSEL_FADE_OPTIONS: {
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: mediaQuery.large - 1,
        settings: {
          arrows: false,
        },
      },
    ],
  },
};

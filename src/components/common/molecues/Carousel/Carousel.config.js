// 9fbef606107a605d69c0edbcd8029e5d 
import { breakpoints } from '../../../../../styles/themes/mediaQuery';

export default {
  CAROUSEL_OPTIONS: {
    autoplay: true,
    infinite: true,
    arrows: true,
    fade: false,
    speed: 200,
    swipeToSlide: true,
    dots: false,
    dotsClass: 'slick-dots',
    swipe: true,
    slide: true,
    touchMove: true,
    touchThreshold: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: breakpoints.values.lg - 1,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: breakpoints.values.sm - 1,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  },
  params: {
    moduleO: {
      dataLocator: 'moduleO_header_text',
      dataLocatorCTA: 'moduleO_cta_btn',
    },
    moduleP: {
      dataLocator: 'moduleP_header_text',
      dataLocatorCTA: 'moduleP_cta_btn',
    },
    ATBmodal: {
      dataLocator: 'moduleP_header_text',
      dataLocatorCTA: 'moduleP_cta_btn',
    },
    styleWith: {
      dataLocator: 'styleWith_header_text',
      dataLocatorCTA: 'styleWith_cta_btn',
    },
  },
  variations: {
    moduleO: 'moduleO',
    moduleP: 'moduleP',
    ATBmodal: 'ATBmodal',
    styleWith: 'styleWith',
  },
};

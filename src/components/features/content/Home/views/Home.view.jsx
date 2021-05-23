import React from "react";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/Home.style";
import Carousel from "../../../../common/molecues/Carousel";
import carouselConfig from "../../../../../config/carousel";
import { Row, Col } from "../../../../common/atoms";
import { getIconPath } from "../../../../../utils";
// import { breakpoints } from "../../../../../../styles/themes/mediaQuery";
import {
  breakpoints,
  mediaQuery,
} from "../../../../../../styles/themes/mediaQuery";

const HomeView = ({ className }) => {
  const config = {
    ...carouselConfig,
    maxLoopCount: 10,
  };

  const CAROUSEL_OPTIONS = {
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    fade: true,
    speed: 300,
    swipeToSlide: true,
    dots: true,
    dotsClass: "slick-dots",
    swipe: true,
    // responsive: [
    //   {
    //     breakpoint: parseInt(breakpoints.medium, 10) - 1,
    //     settings: {
    //       autoplay: true,
    //       arrows: false,
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: parseInt(breakpoints.large, 10) - 1,
    //     settings: {
    //       autoplay: true,
    //       arrows: false,
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: parseInt(breakpoints.large, 10),
    //     settings: {
    //       autoplay: true,
    //       arrows: false,
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  // const CAROUSEL_FADE_OPTIONS = {
  //   autoplay: true,
  //   arrows: false,
  //   autoplaySpeed: 3000,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: mediaQuery.large - 1,
  //       settings: {
  //         arrows: false,
  //       },
  //     },
  //   ],
  // };

  return (
    <Row
      fullBleed
      className={className}
      ignoreGutter={{ small: true, medium: true, large: true }}
    >
      <Col colSize={{ small: 6, medium: 8, large: 12 }}>
        <Carousel
          className="moduleO-variation"
          options={CAROUSEL_OPTIONS}
          carouselConfig={{ type: "dark" }}
        >
          <img
            className="home-banner-item-img"
            alt=""
            src="/images/banner-item-1.png"
          />
          <img
            className="home-banner-item-img"
            alt=""
            src="/images/banner-item-2.png"
          />
        </Carousel>
      </Col>
    </Row>
  );
};

export default withStyle(HomeView, styles);

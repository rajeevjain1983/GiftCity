import React from "react";
import Slider from "react-slick";
import Router from "next/router";
import isEqual from "lodash/isEqual";
import config from "../Carousel.config";
import CarouselStyle from "../Carousel.style";
import withStyles from "../../../hoc/withStyle";

const defaults = { ...config.CAROUSEL_DEFAULTS };

/**
 * @function Carousel component that creates carousel using
 * third party 'react-slick'
 */
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.slider = null;
    this.getSlider = this.getSlider.bind(this);
    this.getPlayButton = this.getPlayButton.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.state = {
      autoplay: true,
      uniqueId: Math.random() * 1000,
      // uniqueId is generated when a new carousel is instantiated and is passed to slider to keep them unique
      // key could also be passed from the module from the component(like in moduleH) which will overwrite this key
      loopCompleted: 0,
    };
  }

  componentDidMount() {
    const {
      options: { maxLoopCount },
    } = this.props;
    if (maxLoopCount) {
      Router.events.on("routeChangeComplete", this.resetLoopCount);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (isEqual(nextProps, this.props) && isEqual(nextState, this.state)) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    Router.events.off("routeChangeComplete", this.resetLoopCount);
  }

  /**
   * @function getSlider function gets DOM reference of slider component.
   * @param {[Object]} element [Event object of click].
   * @return {node} function returns slider element.
   */
  getSlider(element) {
    this.slider = element;
    return this.slider;
  }

  /**
   * @function getPlayComponent function gets DOM reference of slider component.
   * @param {[Object]} element [Event object of click].
   * @return {node} function returns slider element.
   */
  getPlayButton(wrapperConfig) {
    const { autoplay } = this.state;
    const {
      playIconButtonLabel,
      pauseIconButtonLabel,
      dataLocatorPause,
      dataLocatorPlay,
    } = wrapperConfig;

    const buttonClass = "tcp_carousel__play_pause_button";
    return autoplay ? (
      <button
        className={buttonClass}
        data-locator={dataLocatorPause}
        onClick={this.pause}
        aria-label={pauseIconButtonLabel}
      >
        <img
          alt="play pause"
          className="tcp_carousel__play_pause_button_icon"
          src="/icons/stop-accessible.svg"
        />
      </button>
    ) : (
      <button
        className={buttonClass}
        data-locator={dataLocatorPlay}
        onClick={this.play}
        aria-label={playIconButtonLabel}
      >
        <img
          alt="play pause"
          className="tcp_carousel__play_pause_button_icon"
          src="/icons/play-accessible.svg"
        />
      </button>
    );
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { sliderImageIndex } = nextProps;
    const { sliderImageIndex: sliderImage } = this.props;
    if (sliderImageIndex !== sliderImage) {
      this.slider.slickGoTo(sliderImageIndex);
    }
  };

  resetLoopCount = () => {
    const {
      options: { maxLoopCount },
    } = this.props;

    if (maxLoopCount) {
      this.setState({
        loopCompleted: 0,
        autoplay: true,
      });
      if (this.slider) {
        this.slider.slickPlay();
      }
    }
  };

  appendDots = (dots) => {
    const { carouselConfig, options } = this.props;
    return (
      <div>
        {/*
          carouselConfig.autoplay has been used to show/hide play icon only, the auto slide will
          still work. However, the options.autoplay has been used to stop the auto sliding of the carousel.
         */}
        {carouselConfig.autoplay &&
          options.autoplay &&
          this.getPlayButton(carouselConfig)}
        {options.dots && <ul>{dots}</ul>}
      </div>
    );
  };

  /**
   * @function afterChange pause autoplay after max loop count completed
   */
  afterChange = (i) => {
    const {
      options: { maxLoopCount },
    } = this.props;
    const { autoplay } = this.state;
    let { loopCompleted } = this.state;
    if (maxLoopCount && autoplay) {
      if (loopCompleted >= maxLoopCount) {
        this.pause();
        this.setState({
          autoplay: false,
        });
        return;
      }
      if (
        this.slider.props.children &&
        i === this.slider.props.children.length - 1
      ) {
        loopCompleted += 1;
        this.setState({
          loopCompleted,
        });
      }
    }
  };

  /**
   * @function updateState function updates component state
   * after each click on play pause button.
   */
  togglePlay() {
    const { autoplay } = this.state;
    this.setState({ autoplay: !autoplay });
  }

  /**
   * @function pause function stops/pause autoplay for carousel
   * also update component state.
   */
  pause() {
    this.slider.slickPause();
    this.togglePlay();
  }

  /**
   * @function play function enable autoplay for carousel
   * also update component state.
   */
  play() {
    this.slider.slickPlay();
    this.togglePlay();
  }

  /**
   * @function render  Used to render the JSX of the component
   * @param {object} options Customized caroused configs from parent wrapper
   * @param {node} children address object
   * @param {object} carouselConfig Carousel wrapper config to enable customization
   * of functionalities like play pause, change carousel theme etc.
   */
  render() {
    const { options, children, carouselConfig, className, labels } = this.props;
    const { maxLoopCount, ...otherOptions } = options;

    const settings = {
      appendDots: this.appendDots,
      prevArrow: (
        <button
          type="button"
          aria-label={labels && labels.accessibility.ariaPrevious}
        />
      ),
      nextArrow: (
        <button
          type="button"
          aria-label={labels && labels.accessibility.ariaNext}
        />
      ),
      ...defaults,
      ...otherOptions,
      /*
         The dots will be created on both cases. we need this as we are putting custom play/pause
         inside the slick-dots container. So, if some cases if dots not required and we will be able
         render play/pause button or vice-versa. Also check this.getPlayButton()
        */
      dots: options.dots || options.autoplay,
    };

    const { uniqueId } = this.state;

    return (
      <div
        className={`${className} tcp_carousel_wrapper`}
        carouselConfig={carouselConfig}
        data-locator={carouselConfig.dataLocatorCarousel}
      >
        <Slider
          className="tcp_carousel"
          ref={this.getSlider}
          key={uniqueId}
          afterChange={this.afterChange}
          {...settings}
        >
          {!children ? null : children}
        </Slider>
      </div>
    );
  }
}

export default withStyles(Carousel, CarouselStyle);
export { Carousel as CarouselVanilla };

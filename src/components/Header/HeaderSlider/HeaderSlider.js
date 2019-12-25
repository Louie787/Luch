import React, { Component } from "react";
import "./HeaderSlider.scss";
import Slider from "react-slick";
import SliderWatchInfo from "./../../SliderWatchInfo/SliderWatchInfo";

const HeaderSliderPrev = ({ onClick }) => {
  return (
    <span className="header-slider__prev" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 370.814 370.814"
        enableBackground="new 0 0 370.814 370.814"
        fill="var(--primary-color)"
      >
        <polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401 		" />
      </svg>
    </span>
  );
};

const HeaderSliderNext = ({ onClick }) => {
  return (
    <span className="header-slider__next" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 370.814 370.814"
        enableBackground="new 0 0 370.814 370.814"
        fill="var(--primary-color)"
      >
        <polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401 		" />
      </svg>
    </span>
  );
};

class HeaderSlider extends Component {
  state = {
    nav1: null,
    nav2: null
  };

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  componentDidUpdate() {
    this.slider1.slickGoTo(0);
  }

  render() {
    const settings1 = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: <HeaderSliderPrev />,
      nextArrow: <HeaderSliderNext />,
      asNavFor: this.state.nav2
    };

    const settings2 = {
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      draggable: false,
      asNavFor: this.state.nav1
    };

    return (
      <div className="header-slider">
        <Slider {...settings1} ref={slider => (this.slider1 = slider)}>
          {this.props.watches.map(watch => (
            <div className="header-slider__item" key={watch.id}>
              <SliderWatchInfo
                showCategories={true}
                price={watch.price}
                collection={watch.collection}
                movement={watch.movement}
                glass={watch.glass}
                strap={watch.strap}
                type={watch.type}
                descr={watch.descr}
                id={watch.id}
              />
              <img src={watch.img[1]} alt="" className="header-slider__img" />
            </div>
          ))}
        </Slider>
        <div className="header-slider__arc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            stroke="var(--primary-color)"
          >
            <circle cx="0" cy="53%" r="50%" />
          </svg>
        </div>
        <div className="header-slider__numbers">
          <Slider {...settings2} ref={slider => (this.slider2 = slider)}>
            <div className="header-slider__number">01</div>
            <div className="header-slider__number">02</div>
            <div className="header-slider__number">03</div>
            <div className="header-slider__number">04</div>
            <div className="header-slider__number">05</div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default HeaderSlider;

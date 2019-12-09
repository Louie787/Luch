import React from "react";
import "./HomePage.scss";
import Slider from "react-slick";
import Header from "./../../components/Header/Header";
import HeaderSlider from "./../../components/Header/HeaderSlider/HeaderSlider";
import CollectionLink from "./../../components/CollectionLink/CollectionLink";
import SliderWatchInfo from "./../../components/SliderWatchInfo/SliderWatchInfo";
import BorderedButton from "../../components/BorderedButton/BorderedButton";

const SuggestionSliderPrev = ({ onClick }) => {
  return (
    <div className="suggestion-slider__prev" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 370.814 370.814"
        enableBackground="new 0 0 370.814 370.814"
        fill="#ffffff"
      >
        <polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401 		" />
      </svg>
    </div>
  );
};

const SuggestionSliderNext = ({ onClick }) => {
  return (
    <div className="suggestion-slider__next" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 370.814 370.814"
        enableBackground="new 0 0 370.814 370.814"
        fill="#ffffff"
      >
        <polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401 		" />
      </svg>
    </div>
  );
};

const HomePage = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <SuggestionSliderPrev />,
    nextArrow: <SuggestionSliderNext />
  };

  return (
    <>
      <Header
        headerBg={"var(--header-bg-color)"}
        sidebarBg={"var(--sidebar-color)"}
        hasLine={true}
        leftText={
          <>
            MINSK <span>Watch Factory</span>
          </>
        }
        mainContent={<HeaderSlider />}
      />
      <section className="suggestions">
        <div className="suggestion-slider">
          <Slider {...settings}>
            <div className="suggestion-slider__item">
              <div className="suggestion-slider__item-wrapper">
                <CollectionLink
                  text={
                    <>
                      Collection&nbsp;<b>2019</b>
                    </>
                  }
                />
                <div className="suggestion-slider__item-info">
                  <SliderWatchInfo categories={false} />
                </div>
              </div>
              <div
                className="suggestion-slider__item-img"
                style={{ backgroundImage: "url(images/img-6.jpg)" }}
              ></div>
            </div>
            <div className="suggestion-slider__item">
              <div className="suggestion-slider__item-wrapper">
                <CollectionLink
                  text={
                    <>
                      Collection&nbsp;<b>2019</b>
                    </>
                  }
                />
                <div className="suggestion-slider__item-info">
                  <SliderWatchInfo categories={false} />
                </div>
              </div>
              <div
                className="suggestion-slider__item-img"
                style={{ backgroundImage: "url(images/img-5.jpg)" }}
              ></div>
            </div>
            <div className="suggestion-slider__item">
              <div className="suggestion-slider__item-wrapper">
                <CollectionLink
                  text={
                    <>
                      Collection&nbsp;<b>2019</b>
                    </>
                  }
                />
                <div className="suggestion-slider__item-info">
                  <SliderWatchInfo categories={false} />
                </div>
              </div>
              <div
                className="suggestion-slider__item-img"
                style={{ backgroundImage: "url(images/img-12.jpg)" }}
              ></div>
            </div>
            <div className="suggestion-slider__item">
              <div className="suggestion-slider__item-wrapper">
                <CollectionLink
                  text={
                    <>
                      Collection&nbsp;<b>2019</b>
                    </>
                  }
                />
                <div className="suggestion-slider__item-info">
                  <SliderWatchInfo categories={false} />
                </div>
              </div>
              <div
                className="suggestion-slider__item-img"
                style={{ backgroundImage: "url(images/img-16.jpg)" }}
              ></div>
            </div>
            <div className="suggestion-slider__item">
              <div className="suggestion-slider__item-wrapper">
                <CollectionLink
                  text={
                    <>
                      Collection&nbsp;<b>2019</b>
                    </>
                  }
                />
                <div className="suggestion-slider__item-info">
                  <SliderWatchInfo categories={false} />
                </div>
              </div>
              <div
                className="suggestion-slider__item-img"
                style={{ backgroundImage: "url(images/img-19.jpg)" }}
              ></div>
            </div>
          </Slider>
        </div>
        <div className="suggestions__links">
          <a
            href="#"
            className="suggestions__link"
            style={{ backgroundImage: "url(images/img-3.jpg)" }}
          >
            <span>Ladies' Watches</span>
          </a>
          <a
            href="#"
            className="suggestions__link"
            style={{ backgroundImage: "url(images/img-8.jpg)" }}
          >
            <span>Men's Watches</span>
          </a>
        </div>
        <div className="suggestions__collection">
          <div
            className="suggestions__collection-img"
            style={{ backgroundImage: "url(images/img-26.jpg)" }}
          ></div>
          <div className="suggestions__collection-wrapper">
            <div className="suggestions__collection-title">
              <span>Light</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                viewBox="0 0 224.39999 127.5"
                fill={"var(--primary-color)"}
              >
                <path
                  transform="translate(-12,-10.8)"
                  d="m236.4 52.1-49.6 41.4-5.7-4.3 13.4-29.7-6.2-.2-3.9-10.8-73.2 89.8-6.2-3.9 32.5-67.2-28 26.4-5.9-4.3 11.5-23.6-31.5 28.1-5.8-4.2 28-61.5-88.9 74.9-4.9-5.8 102.5-86.4 5.7 4.3-27.6 60.4 32.3-28.8 5.7 4.3-10.8 22.4 28.1-26.4 5.8 4.3-27.2 56.2 60.5-74.3 6.7 18.6 12.5.3-11 24.4 36.3-30.3z"
                />
              </svg>
            </div>
            <p className="suggestions__collection-descr">
              The heart of this watch is a highly reliable Japanese quartz
              movement (Miyota).
            </p>
            <BorderedButton text={"Watch Collection"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

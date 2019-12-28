import React from "react";
import "./HomePage.scss";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  const allWatches = useSelector(state => state.appReducer.watches);
  const hitWatches = allWatches.filter(item => item.hit);

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
        mainContent={<HeaderSlider watches={hitWatches} />}
      />
      <section className="suggestions">
        <div className="suggestion-slider">
          <Slider {...settings}>
            {hitWatches.map((watch, index) => (
              <div className="suggestion-slider__item" key={watch.id}>
                <div className="suggestion-slider__item-wrapper">
                  <CollectionLink
                    text={
                      <>
                        Collection&nbsp;<b>{watch.collection}</b>
                      </>
                    }
                    link={watch.collection}
                  />
                  <div className="suggestion-slider__item-info">
                    <SliderWatchInfo showCategories={false} watchObj={watch} />
                  </div>
                </div>
                <div
                  className="suggestion-slider__item-img"
                  style={{
                    backgroundImage: `url(images/img-${index + 1}.jpg)`
                  }}
                ></div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="suggestions__links">
          <Link
            to="/products/ladies"
            className="suggestions__link"
            style={{ backgroundImage: "url(images/img-6.jpg)" }}
          >
            <span>Ladies' Watches</span>
          </Link>
          <Link
            to="/products/mens"
            className="suggestions__link"
            style={{ backgroundImage: "url(images/img-7.jpg)" }}
          >
            <span>Men's Watches</span>
          </Link>
        </div>
        <div className="suggestions__collection">
          <div
            className="suggestions__collection-img"
            style={{ backgroundImage: "url(images/img-8.jpg)" }}
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
            <BorderedButton text={"Watch Collection"} link={"/products"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

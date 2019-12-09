import React from "react";
import "./SliderWatchInfo.scss";
import PropTypes from "prop-types";

import BorderedButton from "./../BorderedButton/BorderedButton";
import FavoritesButton from "./../FavoritesButton/FavoritesButton";

const SliderWatchInfo = props => {
  return (
    <div className="slider-watch-info">
      <div className="slider-watch-info__flex-line">
        <span className="slider-watch-info__price">&#36;559</span>
        <h4 className="slider-watch-info__collection">Grodno</h4>
      </div>
      {props.showCategories && (
        <p className="slider-watch-info__categories">
          <span>Quartz movement</span>
          <span>Mineral glass</span>
          <span>Genuine leather strap</span>
        </p>
      )}
      <div className="slider-watch-info__flex-line">
        <div className="slider-watch-info__for">
          for <span>him</span>
        </div>
        <p className="slider-watch-info__descr">
          The heart of this watch is a highly reliable Japanese quartz movement
          (Miyota).
        </p>
      </div>
      <div className="slider-watch-info__flex-line">
        <BorderedButton />
        <FavoritesButton />
      </div>
    </div>
  );
};

SliderWatchInfo.propTypes = {
  showCategories: PropTypes.bool
};

export default SliderWatchInfo;

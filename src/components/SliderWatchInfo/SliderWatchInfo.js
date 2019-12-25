import React from "react";
import "./SliderWatchInfo.scss";
import PropTypes from "prop-types";

import BorderedButton from "./../BorderedButton/BorderedButton";
import FavoritesButton from "./../FavoritesButton/FavoritesButton";

const SliderWatchInfo = props => {
  return (
    <div className="slider-watch-info">
      <div className="slider-watch-info__flex-line">
        <span className="slider-watch-info__price">&#36;{props.price}</span>
        <h4 className="slider-watch-info__collection">{props.collection}</h4>
      </div>
      {props.showCategories && (
        <p className="slider-watch-info__categories">
          <span>{props.movement} movement</span>
          <span>{props.glass} glass</span>
          <span>{props.strap} strap</span>
        </p>
      )}
      <div className="slider-watch-info__flex-line">
        <div className="slider-watch-info__for">
          for <span>{props.type === "Mens" ? "him" : "her"}</span>
        </div>
        <p className="slider-watch-info__descr">{props.descr}</p>
      </div>
      <div className="slider-watch-info__flex-line">
        <BorderedButton link={`/product/${props.id}`} />
        <FavoritesButton />
      </div>
    </div>
  );
};

SliderWatchInfo.propTypes = {
  showCategories: PropTypes.bool,
  price: PropTypes.number,
  collection: PropTypes.string,
  movement: PropTypes.string,
  glass: PropTypes.string,
  strap: PropTypes.string,
  type: PropTypes.string,
  descr: PropTypes.string,
  id: PropTypes.string
};

export default SliderWatchInfo;

import React from "react";
import "./SliderWatchInfo.scss";
import PropTypes from "prop-types";

import BorderedButton from "./../BorderedButton/BorderedButton";
import FavoritesButton from "./../FavoritesButton/FavoritesButton";

const SliderWatchInfo = props => {
  return (
    <div className="slider-watch-info">
      <div className="slider-watch-info__flex-line">
        <span className="slider-watch-info__price">
          &#36;{props.watchObj.price}
        </span>
        <h4 className="slider-watch-info__collection">
          {props.watchObj.collection}
        </h4>
      </div>
      {props.showCategories && (
        <p className="slider-watch-info__categories">
          <span>{props.watchObj.movement} movement</span>
          <span>{props.watchObj.glass} glass</span>
          <span>{props.watchObj.strap} strap</span>
        </p>
      )}
      <div className="slider-watch-info__flex-line">
        <div className="slider-watch-info__for">
          for <span>{props.watchObj.type === "Mens" ? "him" : "her"}</span>
        </div>
        <p className="slider-watch-info__descr">{props.watchObj.descr}</p>
      </div>
      <div className="slider-watch-info__flex-line">
        <BorderedButton link={`/product/${props.watchObj.id}`} />
        <FavoritesButton watchID={props.watchObj.id} />
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

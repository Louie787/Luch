import React from "react";
import PropTypes from "prop-types";
import "./WatchCard.scss";

import BorderedButton from "../BorderedButton/BorderedButton";
import GradientButton from "../GradientButton/GradientButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";

const WatchCard = props => {
  return (
    <div
      className={
        props.exclusive ? "watch-card watch-card_exclusive" : "watch-card"
      }
    >
      <div className="watch-card__wrapper">
        <img src="images/watch-1.png" alt="" className="watch-card__img" />
      </div>
      <div className="watch-card__wrapper">
        <div className="watch-card__flex-line">
          <div className="watch-card__for">
            for <span>him</span>
          </div>
          <FavoritesButton />
        </div>
        <h4 className="watch-card__collection">Grodno</h4>
        {props.exclusive && (
          <p className="watch-card__categories">
            <span>Quartz movement</span>
            <span>Mineral glass</span>
            <span>Genuine leather strap</span>
          </p>
        )}

        <p className="watch-card__descr">
          The heart of this watch is a highly reliable Japanese quartz movement
          (Miyota).
        </p>
        <div className="watch-card__flex-line">
          {props.exclusive ? (
            <BorderedButton />
          ) : (
            <div className="watch-card__btn-wrapper">
              <GradientButton />
            </div>
          )}
          <span className="watch-card__price">&#36;559</span>
        </div>
      </div>
    </div>
  );
};

WatchCard.propTypes = {
  exclusive: PropTypes.bool
};

export default WatchCard;

import React from "react";
import "./WatchCard.scss";
import PropTypes from "prop-types";

import BorderedButton from "../BorderedButton/BorderedButton";
import GradientButton from "../GradientButton/GradientButton";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import DeleteButton from "../DeleteButton/DeleteButton";

const WatchCard = props => {
  return (
    <div
      className={
        props.exclusive ? "watch-card watch-card_exclusive" : "watch-card"
      }
    >
      <div className="watch-card__wrapper">
        <img src={props.watchObj.img[0]} alt="" className="watch-card__img" />
      </div>
      <div className="watch-card__wrapper">
        <div className="watch-card__flex-line">
          <div className="watch-card__for">
            for <span>{props.watchObj.type === "Mens" ? "him" : "her"}</span>
          </div>
          {props.delBtn ? (
            <DeleteButton delFrom={props.component} delID={props.watchObj.id} />
          ) : (
            <FavoritesButton watchID={props.watchObj.id} />
          )}
        </div>
        <h4 className="watch-card__collection">{props.watchObj.collection}</h4>
        {props.exclusive && (
          <p className="watch-card__categories">
            <span>{props.watchObj.movement} movement</span>
            <span>{props.watchObj.glass} glass</span>
            <span>{props.watchObj.strap} strap</span>
          </p>
        )}
        <p className="watch-card__descr">{props.watchObj.descr}</p>
        <div className="watch-card__flex-line">
          {props.exclusive ? (
            <BorderedButton link={`/product/${props.watchObj.id}`} />
          ) : (
            <div className="watch-card__btn-wrapper">
              <GradientButton link={`/product/${props.watchObj.id}`} />
            </div>
          )}
          <span className="watch-card__price">&#36;{props.watchObj.price}</span>
        </div>
      </div>
    </div>
  );
};

WatchCard.propTypes = {
  exclusive: PropTypes.bool,
  watchObj: PropTypes.object,
  delBtn: PropTypes.bool,
  component: PropTypes.oneOf(["favorites", "cart"])
};

export default WatchCard;

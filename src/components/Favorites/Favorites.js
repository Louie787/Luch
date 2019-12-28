import React from "react";
import "./Favorites.scss";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WatchCard from "./../WatchCard/WatchCard";

const Favorites = () => {
  const watches = useSelector(state => state.appReducer.watches);
  const favoritesID = useSelector(state => state.favoritesReducer);
  const favoritesWatches = watches.filter(item =>
    favoritesID.includes(item.id)
  );

  return (
    <div className="favorites">
      <p className="favorites__text">
        {favoritesWatches.length} products in your favorites
      </p>
      <TransitionGroup className="favorites__wrap">
        {favoritesWatches.map(watch => (
          <CSSTransition
            key={watch.id}
            classNames="favorites__item"
            timeout={350}
          >
            <div className="favorites__item">
              <WatchCard
                watchObj={watch}
                exclusive={false}
                delBtn={true}
                component={"favorites"}
              />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Favorites;

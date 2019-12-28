import React, { useState, useEffect } from "react";
import "./FavoritesButton.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  delFromFavorites
} from "./../../store/actions/favorites";

const FavoritesButton = props => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favoritesReducer);
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    favorites.includes(props.watchID) ? setFavorite(true) : setFavorite(false);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleClick = () => {
    isFavorite
      ? dispatch(delFromFavorites(props.watchID))
      : dispatch(addToFavorites(props.watchID));
  };

  return (
    <div
      className="favorites-button"
      title="Add to Favorites"
      onClick={() => handleClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1rem"
        height="1rem"
        viewBox="0 0 100 100"
        fill={isFavorite ? "var(--secondary-color)" : "none"}
        stroke="var(--secondary-color)"
        strokeWidth="4px"
      >
        <path d="M 16 8 L 16 72 L 48 56 L 80 72 L 80 8 Z M 16 8 " />
      </svg>
    </div>
  );
};

export default FavoritesButton;

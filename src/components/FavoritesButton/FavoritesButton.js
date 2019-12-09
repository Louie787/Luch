import React from "react";
import "./FavoritesButton.scss";

const FavoritesButton = () => {
  return (
    <div className="favorites-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1rem"
        height="1rem"
        viewBox="0 0 100 100"
        fill="none"
        stroke="var(--secondary-color)"
        strokeWidth="4px"
      >
        <path d="M 16 8 L 16 72 L 48 56 L 80 72 L 80 8 Z M 16 8 " />
      </svg>
    </div>
  );
};

export default FavoritesButton;

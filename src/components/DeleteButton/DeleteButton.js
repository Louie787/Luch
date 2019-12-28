import React from "react";
import "./DeleteButton.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { delFromFavorites } from "./../../store/actions/favorites";

const DeleteButton = props => {
  const dispatch = useDispatch();

  const handleClick = () => {
    props.delFrom === "favorites"
      ? dispatch(delFromFavorites(props.delID))
      : console.log(null);
  };

  return (
    <div
      className="delete-button"
      title={"Delete from " + props.delFrom}
      onClick={() => handleClick()}
    >
      <span className="delete-button__line"></span>
      <span className="delete-button__line"></span>
    </div>
  );
};

DeleteButton.propTypes = {
  delFrom: PropTypes.oneOf(["favorites", "cart"]),
  delID: PropTypes.string
};

export default DeleteButton;

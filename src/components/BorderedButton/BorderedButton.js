import React from "react";
import "./BorderedButton.scss";
import { Link } from "react-router-dom";

const BorderedButton = props => {
  return (
    <Link to={props.link} className="btn btn_bordered">
      {props.text || "See more"}
    </Link>
  );
};

export default BorderedButton;

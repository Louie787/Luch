import React from "react";
import "./GradientButton.scss";
import { Link } from "react-router-dom";

const GradientButton = props => {
  return (
    <Link to={props.link} className="btn btn_gradient">
      <span>{props.text || "See more"}</span>
    </Link>
  );
};

export default GradientButton;

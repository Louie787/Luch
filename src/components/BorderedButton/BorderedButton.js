import React from "react";
import "./BorderedButton.scss";

const BorderedButton = props => {
  return (
    <a href="#" className=" btn btn_bordered">
      {props.text || "See more"}
    </a>
  );
};

export default BorderedButton;

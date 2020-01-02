import React from "react";
import "./CollectionLink.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CollectionLink = props => {
  return (
    <div className="collection-link">
      <p className="collection-link__text">{props.text}</p>
      <Link
        to={`/products/${props.link.toLowerCase()}`}
        className="collection-link__link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 370.814 370.814"
          enableBackground="new 0 0 370.814 370.814"
          fill="#ffffff"
        >
          <polygon points="292.92,24.848 268.781,0 77.895,185.401 268.781,370.814 292.92,345.961 127.638,185.401 		" />
        </svg>
      </Link>
    </div>
  );
};

CollectionLink.propTypes = {
  text: PropTypes.node
};

export default CollectionLink;

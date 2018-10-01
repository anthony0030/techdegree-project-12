import React from "react";
import PropTypes from "prop-types";

function Icon(props) {
  return (
   <i className={`material-icons ${props.className}`}>{props.i}</i>
  );
}

Icon.propTypes = {
  i: PropTypes.string.isRequired,
  className: PropTypes.string
};




export default Icon;
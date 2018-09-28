import React from "react";
import PropTypes from "prop-types";

function Icon(props) {
  return (
   <i className="material-icons contactIcon">{props.i}</i>
  );
}

Icon.propTypes = {
  i: PropTypes.string.isRequired
};




export default Icon;
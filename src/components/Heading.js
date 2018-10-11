import React from "react";
import PropTypes from "prop-types";

function Heading(props) {
  return (
    <h1 className="my-4">{props.title}
      <small> {props.subtitle}</small>
    </h1>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};




export default Heading;
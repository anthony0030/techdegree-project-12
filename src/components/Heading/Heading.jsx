import React from "react";
import PropTypes from "prop-types";

function Heading(props) {
  const { title, subtitle } = props;
  return (
    <h1 className="my-4">{title}
      <small> {subtitle}</small>
    </h1>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Heading;

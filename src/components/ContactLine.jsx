import React from "react";
import PropTypes from "prop-types";
import { Icon } from "components";

function ContactLine(props) {
  const { link, icon, text } = props;

  return (
    <li className="list-group-item p-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="h2 text-decoration-none"
      >
        <Icon i={icon} className="me-3 d-inline-block" />
        <p className="fs-3 d-inline-block text-dark mb-0">{text}</p>
      </a>
    </li>
  );
}

ContactLine.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactLine;

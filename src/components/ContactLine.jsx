import React from "react";
import PropTypes from "prop-types";
import { Icon } from "components";

function ContactLine(props) {
  const { link, icon, text } = props;

  return (
    <li className="list-group-item px-0 py-0">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-line-container"
      >
        <Icon i={icon} className="contactIcon" />
        <p className="ContactText">{text}</p>
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

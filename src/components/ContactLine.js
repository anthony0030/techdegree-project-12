import React from "react";
import PropTypes from "prop-types";


import Icon from "./Icon";


function ContactLine(props) {
  return (
    <li className="list-group-item px-0 py-0">
      <a href={props.link} target="_blank" className="contact-line-container">
        <Icon i={props.icon} className="contactIcon"/>
        <p className="ContactText">{props.text}</p>
      </a>
    </li>
  );
}

ContactLine.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default ContactLine;
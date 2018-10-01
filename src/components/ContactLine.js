import React from "react";
import PropTypes from "prop-types";


import Icon from "./Icon"


function ContactLine(props) {
  return (
    <a href={props.link} target="_blank">
      <li className="list-group-item">
        <Icon i={props.icon} className="contactIcon"/>
        <p className="ContactText">{props.text}</p>
      </li>
    </a>
  );
}

ContactLine.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};




export default ContactLine;
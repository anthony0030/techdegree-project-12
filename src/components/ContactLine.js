import React from "react";
import PropTypes from "prop-types";


import Icon from "./Icon"


function ContactLine(props) {
  return (
    <a href={props.link}>
      <li className="list-group-item">
        <Icon i={props.icon} className="contactIcon"/>
        <p class="ContactText">{props.text}</p>
      </li>
    </a>
  );
}

ContactLine.propTypes = {
  // data: PropTypes.array.isRequired
};




export default ContactLine;
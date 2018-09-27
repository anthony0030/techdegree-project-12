import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

function MainNavItem(props) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={props.link}>{props.text}</NavLink>
    </li>
  );
}

MainNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MainNavItem;
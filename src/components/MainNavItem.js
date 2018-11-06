import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

function MainNavItem(props) {
  const { text, link } = props;
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={link}>
        {text}
      </NavLink>
    </li>
  );
}

MainNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default MainNavItem;
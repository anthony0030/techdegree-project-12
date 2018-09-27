import React from "react";
import PropTypes from "prop-types";

function MainNavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.link}>{props.text}</a>
    </li>
  );
}

MainNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MainNavItem;
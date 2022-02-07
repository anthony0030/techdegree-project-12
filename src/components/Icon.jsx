import React from "react";
import PropTypes from "prop-types";

import at from "../assets/svg/at.svg";
import facebook from "../assets/svg/facebook.svg";
import mobile from "../assets/svg/mobile.svg";
import user from "../assets/svg/user.svg";
import location from "../assets/svg/location.svg";
import github from "../assets/svg/github.svg";
import download from "../assets/svg/download.svg";
import bug from "../assets/svg/bug.svg";
import enlarge from "../assets/svg/enlarge.svg";
import shrink from "../assets/svg/shrink.svg";

let icon;
let alt;

function Icon(props) {
  switch (props.i) {
    case "at":
      icon = at;
      alt = "at Icon";
      break;

    case "facebook":
      icon = facebook;
      alt = "facebook Icon";
      break;

    case "mobile":
      icon = mobile;
      alt = "mobile Icon";
      break;

    case "user":
      icon = user;
      alt = "user Icon";
      break;

    case "location":
      icon = location;
      alt = "location Icon";
      break;

    case "github":
      icon = github;
      alt = "github Icon";
      break;

    case "download":
      icon = download;
      alt = "download Icon";
      break;

    case "enlarge":
      icon = enlarge;
      alt = "enlarge Icon";
      break;

    case "shrink":
      icon = shrink;
      alt = "shrink Icon";
      break;

    default:
      icon = bug;
      alt = "Error with SVG";
      break;
  }

  return <img src={icon} alt={alt} className={props.className} />;
}

Icon.propTypes = {
  i: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;

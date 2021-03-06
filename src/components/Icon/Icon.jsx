import React from "react";
import PropTypes from "prop-types";

import at from "./SVG/at.svg";
import facebook from "./SVG/facebook.svg";
import mobile from "./SVG/mobile.svg";
import user from "./SVG/user.svg";
import location from "./SVG/location.svg";
import github from "./SVG/github.svg";
import download from "./SVG/download.svg";
import bug from "./SVG/bug.svg";
import enlarge from "./SVG/enlarge.svg";
import shrink from "./SVG/shrink.svg";


let icon;
let alt;


function Icon(props) {
    switch(props.i) {

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


  return( <img src={icon} alt={alt} className={props.className}/> );

}


Icon.propTypes = {
  i: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;

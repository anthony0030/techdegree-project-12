import React from "react";
import PropTypes from "prop-types";


// Application Badges
import androidBadge from "./Badges/android.png";
import apacheBadge from "./Badges/apache.png";
import appcelerator from "./Badges/appcelerator.png";
import htmlBadge from "./Badges/html.png";
import cssBadge from "./Badges/css.png";
import jsBadge from "./Badges/js.png";
import sassBadge from "./Badges/sass.png";
import jadeBadge from "./Badges/jade.png";
import reactBadge from "./Badges/react.png";
import angularBadge from "./Badges/angular.png";
import cookieBadge from "./Badges/cookie.png";
import bootstrapBadge from "./Badges/bootstrap.png";
import jqueryBadge from "./Badges/jquery.png";
import apiBadge from "./Badges/api.png";
import errorBadge from "./Badges/error.png";
import npmBadge from "./Badges/npm.png";
import bowerBadge from "./Badges/bower.png";
import svgBadge from "./Badges/svg.png";


let icon;
let alt;
let toolTip;


function Skill(props) {

  switch(props.skill) {

    case "html":
      icon = htmlBadge;
      toolTip= "I used HTML in this project!";
      alt = "HTML Badge Icon";
    break;

    case "css":
      icon = cssBadge;
      toolTip= "I used CSS in this project!";
      alt = "CSS Badge Icon";
    break;

    case "js":
      icon = jsBadge;
      toolTip= "I used JavaScript in this project!";
      alt = "JS Badge Icon";
    break;

    case "sass":
      icon = sassBadge;
      toolTip= "I used SASS in this project!";
      alt = "SASS Badge Icon";
    break;

    case "jade":
      icon = jadeBadge;
      toolTip= "I used JADE in this project!";
      alt = "JADE Badge Icon";
    break;

    case "react":
      icon = reactBadge;
      toolTip= "I used REACT in this project!";
      alt = "REACT Badge Icon";
    break;

    case "angular":
      icon = angularBadge;
      toolTip= "I used Angular in this project!";
      alt = "Angular Badge Icon";
    break;

    case "cookie":
      icon = cookieBadge;
      toolTip= "I used cookies in this project!";
      alt = "Cookie Badge Icon";
    break;

   case "api":
      icon = apiBadge;
      toolTip= "I used an API in this project!";
      alt = "API Badge Icon";
    break;

     case "bootstrap":
      icon = bootstrapBadge;
      toolTip= "I used Bootstrap in this project!";
      alt = "bootstrap Badge Icon";
    break;

     case "jquery":
      icon = jqueryBadge;
      toolTip= "I used jQuery in this project!";
      alt = "jQuery Badge Icon";
    break;

     case "npm":
      icon = npmBadge;
      toolTip= "I used npm in this project!";
      alt = "npm Badge Icon";
    break;

     case "bower":
      icon = bowerBadge;
      toolTip= "I used Bower in this project!";
      alt = "bower Badge Icon";
    break;

   case "svg":
      icon = svgBadge;
      toolTip= "I used SVGs in this project!";
      alt = "svg Badge Icon";
    break;

    case "android":
      icon = androidBadge;
      toolTip= "";
      alt = "android Badge Icon";
    break;

    case "apache":
      icon = apacheBadge;
      toolTip= "";
      alt = "apache Badge Icon";
    break;

    case "appcelerator":
      icon = appcelerator;
      toolTip= "";
      alt = "appcelerator Badge Icon";
    break;

    default:
      icon = errorBadge;
      toolTip= "Failed to load icon or icon does not exist";
      alt = "Error with Icon";
  }

  return (
   <img src={icon} alt={alt} className="skill-badge" data-toggle="tooltip" data-placement="top" title={toolTip}/>
  );
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired
};

export default Skill;
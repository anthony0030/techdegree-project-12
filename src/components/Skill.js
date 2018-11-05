import React from "react";
import PropTypes from "prop-types";


// Application Badges
import android from "./Badges/android.png";
import apache from "./Badges/apache.png";
import appcelerator from "./Badges/appcelerator.png";
import html from "./Badges/html.png";
import css from "./Badges/css.png";
import js from "./Badges/js.png";
import sass from "./Badges/sass.png";
import jade from "./Badges/jade.png";
import react from "./Badges/react.png";
import angular from "./Badges/angular.png";
import cookie from "./Badges/cookie.png";
import bootstrap from "./Badges/bootstrap.png";
import jquery from "./Badges/jquery.png";
import api from "./Badges/api.png";
import error from "./Badges/error.png";
import npm from "./Badges/npm.png";
import bower from "./Badges/bower.png";
import svg from "./Badges/svg.png";


let icon;
let alt;
let toolTip;


function Skill(props) {

  switch(props.skill) {

    case "html":
      icon = html;
      toolTip= "I used HTML in this project!";
      alt = "HTML Badge Icon";
    break;

    case "css":
      icon = css;
      toolTip= "I used CSS in this project!";
      alt = "CSS Badge Icon";
    break;

    case "js":
      icon = js;
      toolTip= "I used JavaScript in this project!";
      alt = "JS Badge Icon";
    break;

    case "sass":
      icon = sass;
      toolTip= "I used SASS in this project!";
      alt = "SASS Badge Icon";
    break;

    case "jade":
      icon = jade;
      toolTip= "I used JADE in this project!";
      alt = "JADE Badge Icon";
    break;

    case "react":
      icon = react;
      toolTip= "I used REACT in this project!";
      alt = "REACT Badge Icon";
    break;

    case "angular":
      icon = angular;
      toolTip= "I used Angular in this project!";
      alt = "Angular Badge Icon";
    break;

    case "cookie":
      icon = cookie;
      toolTip= "I used cookies in this project!";
      alt = "Cookie Badge Icon";
    break;

   case "api":
      icon = api;
      toolTip= "I used an API in this project!";
      alt = "API Badge Icon";
    break;

     case "bootstrap":
      icon = bootstrap;
      toolTip= "I used Bootstrap in this project!";
      alt = "bootstrap Badge Icon";
    break;

     case "jquery":
      icon = jquery;
      toolTip= "I used jQuery in this project!";
      alt = "jQuery Badge Icon";
    break;

     case "npm":
      icon = npm;
      toolTip= "I used npm in this project!";
      alt = "npm Badge Icon";
    break;

     case "bower":
      icon = bower;
      toolTip= "I used Bower in this project!";
      alt = "bower Badge Icon";
    break;

   case "svg":
      icon = svg;
      toolTip= "I used SVGs in this project!";
      alt = "svg Badge Icon";
    break;

    case "android":
      icon = android;
      toolTip= "";
      alt = "android Badge Icon";
    break;

    case "apache":
      icon = apache;
      toolTip= "";
      alt = "apache Badge Icon";
    break;

    case "appcelerator":
      icon = appcelerator;
      toolTip= "";
      alt = "appcelerator Badge Icon";
    break;

    default:
      icon = error;
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
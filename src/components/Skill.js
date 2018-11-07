import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tooltip } from 'reactstrap';

// Application Badges
import android from "./Badges/android.png";
import angular from "./Badges/angular.png";
import apache from "./Badges/apache.png";
import api from "./Badges/api.png";
import appcelerator from "./Badges/appcelerator.png";
import apple from "./Badges/apple.png";
import atom from "./Badges/atom.png";
import aws from "./Badges/aws.png";
import babel from "./Badges/babel.png";
import backbone from "./Badges/backbone.png";
import bitbucket from "./Badges/bitbucket.png";
import bootstrap from "./Badges/bootstrap.png";
import bower from "./Badges/bower.png";
import chrome from "./Badges/chrome.png";
import codeignitor from "./Badges/codeignitor.png";
import coffeescript from "./Badges/coffeescript.png";
import composer from "./Badges/composer.png";
import cookie from "./Badges/cookie.png";
import css from "./Badges/css.png";
import cucumber from "./Badges/cucumber.png";
import d3js from "./Badges/d3js.png";
import debian from "./Badges/debian.png";
import django from "./Badges/django.png";
import docker from "./Badges/docker.png";
import drupal from "./Badges/drupal.png";
import error from "./Badges/error.png";
import firefox from "./Badges/firefox.png";
import gatling from "./Badges/gatling.png";
import gimp from "./Badges/gimp.png";
import git from "./Badges/git.png";
import github from "./Badges/github.png";
import gitlab from "./Badges/gitlab.png";
import gradle from "./Badges/gradle.png";
import grunt from "./Badges/grunt.png";
import gulp from "./Badges/gulp.png";
import html from "./Badges/html.png";
import illustrator from "./Badges/illustrator.png";
import inkscape from "./Badges/inkscape.png";
import jade from "./Badges/jade.png";
import java from "./Badges/java.png";
import jquery from "./Badges/jquery.png";
import js from "./Badges/js.png";
import krakenjs from "./Badges/krakenjs.png";
import laravel from "./Badges/laravel.png";
import less from "./Badges/less.png";
import linux from "./Badges/linux.png";
import meteor from "./Badges/meteor.png";
import mocha from "./Badges/mocha.png";
import mongo from "./Badges/mongo.png";
import mysql from "./Badges/mysql.png";
import nginx from "./Badges/nginx.png";
import node from "./Badges/node.png";
import nodewebkit from "./Badges/nodewebkit.png";
import npm from "./Badges/npm.png";
import osx from "./Badges/osx.png";
import photoshop from "./Badges/photoshop.png";
import php from "./Badges/php.png";
import phpstorm from "./Badges/phpstorm.png";
import postgres from "./Badges/postgres.png";
import protractor from "./Badges/protractor.png";
import python from "./Badges/python.png";
import rails from "./Badges/rails.png";
import react from "./Badges/react.png";
import sass from "./Badges/sass.png";
import seqelize from "./Badges/seqelize.png";
import ssh from "./Badges/ssh.png";
import svg from "./Badges/svg.png";
import swift from "./Badges/swift.png";
import tomcat from "./Badges/tomcat.png";
import ts from "./Badges/ts.png";
import ubuntu from "./Badges/ubuntu.png";
import vim from "./Badges/vim.png";
import visualstudio from "./Badges/visualstudio.png";
import windows from "./Badges/windows.png";
import wordpress from "./Badges/wordpress.png";

class Skill extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
  const { skill, projectIndex, skillIndex } = this.props;
  const id = `id-${projectIndex}-${skillIndex}`;
  let icon, toolTip;
  let alt = `${skill.toLowerCase().charAt(0).toUpperCase()} Badge Icon`

  switch(skill) {
    case "bootstrap":    icon = bootstrap;    toolTip = "I used Bootstrap in this project!";           break;
    case "bower":        icon = bower;        toolTip = "I used Bower in this project!";               break;
    case "jquery":       icon = jquery;       toolTip = "I used jQuery in this project!";              break;
    case "npm":          icon = npm;          toolTip = "I used npm in this project!";                 break;
    case "android":      icon = android;      toolTip = "I used Android in this project!";             break;
    case "angular":      icon = angular;      toolTip = "I used Angular in this project!";             break;
    case "apache":       icon = apache;       toolTip = "I used Apache in this project!";              break;
    case "appcelerator": icon = appcelerator; toolTip = "I used Appcelerator in this project!";        break;
    case "apple":        icon = apple;        toolTip = "I used Apple in this project!";               break;
    case "atom":         icon = atom;         toolTip = "I used Atom in this project!";                break;
    case "aws":          icon = aws;          toolTip = "I used AWS in this project!";                 break;
    case "babel":        icon = babel;        toolTip = "I used Babel in this project!";               break;
    case "backbone":     icon = backbone;     toolTip = "I used Backbone in this project!";            break;
    case "bitbucket":    icon = bitbucket;    toolTip = "I used Bitbucket in this project!";           break;
    case "chrome":       icon = chrome;       toolTip = "I used Chrome in this project!";              break;
    case "codeignitor":  icon = codeignitor;  toolTip = "I used Codeignitor in this project!";         break;
    case "coffeescript": icon = coffeescript; toolTip = "I used Coffeescript in this project!";        break;
    case "composer":     icon = composer;     toolTip = "I used Composer in this project!";            break;
    case "cookie":       icon = cookie;       toolTip = "I used Cookies in this project!";             break;
    case "css":          icon = css;          toolTip = "I used CSS in this project!";                 break;
    case "cucumber":     icon = cucumber;     toolTip = "I used Cucumber in this project!";            break;
    case "d3js":         icon = d3js;         toolTip = "I used D3js in this project!";                break;
    case "debian":       icon = debian;       toolTip = "I used Debian in this project!";              break;
    case "django":       icon = django;       toolTip = "I used Django in this project!";              break;
    case "docker":       icon = docker;       toolTip = "I used Docker in this project!";              break;
    case "drupal":       icon = drupal;       toolTip = "I used Drupal in this project!";              break;
    case "firefox":      icon = firefox;      toolTip = "I used Firefox in this project!";             break;
    case "gatling":      icon = gatling;      toolTip = "I used Gatling in this project!";             break;
    case "gimp":         icon = gimp;         toolTip = "I used Gimp in this project!";                break;
    case "git":          icon = git;          toolTip = "I used git in this project!";                 break;
    case "github":       icon = github;       toolTip = "I used GitHub in this project!";              break;
    case "gitlab":       icon = gitlab;       toolTip = "I used GitLab in this project!";              break;
    case "gradle":       icon = gradle;       toolTip = "I used Gradle in this project!";              break;
    case "grunt":        icon = grunt;        toolTip = "I used Grunt in this project!";               break;
    case "gulp":         icon = gulp;         toolTip = "I used Gulp in this project!";                break;
    case "html":         icon = html;         toolTip = "I used HTML in this project!";                break;
    case "illustrator":  icon = illustrator;  toolTip = "I used Illustrator in this project!";         break;
    case "inkscape":     icon = inkscape;     toolTip = "I used Inkscape in this project!";            break;
    case "jade":         icon = jade;         toolTip = "I used JADE in this project!";                break;
    case "java":         icon = java;         toolTip = "I used Java in this project!";                break;
    case "js":           icon = js;           toolTip = "I used JavaScript in this project!";          break;
    case "krakenjs":     icon = krakenjs;     toolTip = "I used KrakenJS in this project!";            break;
    case "laravel":      icon = laravel;      toolTip = "I used Laravel in this project!";             break;
    case "less":         icon = less;         toolTip = "I used LESS in this project!";                break;
    case "linux":        icon = linux;        toolTip = "I used Linux in this project!";               break;
    case "meteor":       icon = meteor;       toolTip = "I used Meteor in this project!";              break;
    case "mocha":        icon = mocha;        toolTip = "I used Mocha in this project!";               break;
    case "mongo":        icon = mongo;        toolTip = "I used Mongo in this project!";               break;
    case "mysql":        icon = mysql;        toolTip = "I used MySQL in this project!";               break;
    case "nginx":        icon = nginx;        toolTip = "I used NGINX in this project!";               break;
    case "node":         icon = node;         toolTip = "I used Node in this project!";                break;
    case "nodewebkit":   icon = nodewebkit;   toolTip = "I used Node Webkit in this project!";         break;
    case "osx":          icon = osx;          toolTip = "I used OSX in this project!";                 break;
    case "photoshop":    icon = photoshop;    toolTip = "I used Photoshop in this project!";           break;
    case "php":          icon = php;          toolTip = "I used PHP in this project!";                 break;
    case "phpstorm":     icon = phpstorm;     toolTip = "I used PHP Storm in this project!";           break;
    case "postgres":     icon = postgres;     toolTip = "I used Postgres in this project!";            break;
    case "protractor":   icon = protractor;   toolTip = "I used Protractor in this project!";          break;
    case "python":       icon = python;       toolTip = "I used Python in this project!";              break;
    case "rails":        icon = rails;        toolTip = "I used Rails in this project!";               break;
    case "react":        icon = react;        toolTip = "I used REACT in this project!";               break;
    case "sass":         icon = sass;         toolTip = "I used SASS in this project!";                break;
    case "seqelize":     icon = seqelize;     toolTip = "I used Seqelize in this project!";            break;
    case "ssh":          icon = ssh;          toolTip = "I used SSH in this project!";                 break;
    case "swift":        icon = swift;        toolTip = "I used Swift in this project!";               break;
    case "tomcat":       icon = tomcat;       toolTip = "I used Tomcat in this project!";              break;
    case "ts":           icon = ts;           toolTip = "I used Type Script in this project!";         break;
    case "ubuntu":       icon = ubuntu;       toolTip = "I used Ubuntu in this project!";              break;
    case "vim":          icon = vim;          toolTip = "I used Vim in this project!";                 break;
    case "visualstudio": icon = visualstudio; toolTip = "I used Visual Studio in this project!";       break;
    case "windows":      icon = windows;      toolTip = "I used Windows in this project!";             break;
    case "wordpress":    icon = wordpress;    toolTip = "I used Wordpress in this project!";           break;
    case "api":          icon = api;          toolTip = "I used an API in this project!";              break;
    case "svg":          icon = svg;          toolTip = "I used SVGs in this project!";                break;
    case "error":        icon = error;        toolTip = "Error!";                                      break;
    default:             icon = error;        toolTip = "Failed to load icon or icon does not exist";  break;
  }

    return(
      <React.Fragment>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={id} toggle={this.toggle}>
          {toolTip}
        </Tooltip>
        <div id={id}>
          <img src={icon} alt={alt} className="skill-badge" />
        </div>
      </React.Fragment>
    );
  }
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  projectIndex: PropTypes.number.isRequired,
  skillIndex: PropTypes.number.isRequired
};

export default Skill;
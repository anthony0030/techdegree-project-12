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
import vcf from "./Badges/vcf.png";
import vim from "./Badges/vim.png";
import visualstudio from "./Badges/visualstudio.png";
import windows from "./Badges/windows.png";
import wordpress from "./Badges/wordpress.png";

class Skill extends Component {

  constructor(props) {
    super(props);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
  const { skill, projectIndex, skillIndex } = this.props;
  const id = `id-${projectIndex}-${skillIndex}`;
  let icon, tooltip;
  let alt = `${skill.toLowerCase().charAt(0).toUpperCase()} Badge Icon`

  switch(skill) {
    case "bootstrap":    icon = bootstrap;    tooltip = "I used Bootstrap in this project!";           break;
    case "bower":        icon = bower;        tooltip = "I used Bower in this project!";               break;
    case "jquery":       icon = jquery;       tooltip = "I used jQuery in this project!";              break;
    case "npm":          icon = npm;          tooltip = "I used npm in this project!";                 break;
    case "android":      icon = android;      tooltip = "I used Android in this project!";             break;
    case "angular":      icon = angular;      tooltip = "I used Angular in this project!";             break;
    case "apache":       icon = apache;       tooltip = "I used Apache in this project!";              break;
    case "appcelerator": icon = appcelerator; tooltip = "I used Appcelerator in this project!";        break;
    case "apple":        icon = apple;        tooltip = "I used Apple in this project!";               break;
    case "atom":         icon = atom;         tooltip = "I used Atom in this project!";                break;
    case "aws":          icon = aws;          tooltip = "I used AWS in this project!";                 break;
    case "babel":        icon = babel;        tooltip = "I used Babel in this project!";               break;
    case "backbone":     icon = backbone;     tooltip = "I used Backbone in this project!";            break;
    case "bitbucket":    icon = bitbucket;    tooltip = "I used Bitbucket in this project!";           break;
    case "chrome":       icon = chrome;       tooltip = "I used Chrome in this project!";              break;
    case "codeignitor":  icon = codeignitor;  tooltip = "I used Codeignitor in this project!";         break;
    case "coffeescript": icon = coffeescript; tooltip = "I used Coffeescript in this project!";        break;
    case "composer":     icon = composer;     tooltip = "I used Composer in this project!";            break;
    case "cookie":       icon = cookie;       tooltip = "I used Cookies in this project!";             break;
    case "css":          icon = css;          tooltip = "I used CSS in this project!";                 break;
    case "cucumber":     icon = cucumber;     tooltip = "I used Cucumber in this project!";            break;
    case "d3js":         icon = d3js;         tooltip = "I used D3js in this project!";                break;
    case "debian":       icon = debian;       tooltip = "I used Debian in this project!";              break;
    case "django":       icon = django;       tooltip = "I used Django in this project!";              break;
    case "docker":       icon = docker;       tooltip = "I used Docker in this project!";              break;
    case "drupal":       icon = drupal;       tooltip = "I used Drupal in this project!";              break;
    case "firefox":      icon = firefox;      tooltip = "I used Firefox in this project!";             break;
    case "gatling":      icon = gatling;      tooltip = "I used Gatling in this project!";             break;
    case "gimp":         icon = gimp;         tooltip = "I used Gimp in this project!";                break;
    case "git":          icon = git;          tooltip = "I used git in this project!";                 break;
    case "github":       icon = github;       tooltip = "I used GitHub in this project!";              break;
    case "gitlab":       icon = gitlab;       tooltip = "I used GitLab in this project!";              break;
    case "gradle":       icon = gradle;       tooltip = "I used Gradle in this project!";              break;
    case "grunt":        icon = grunt;        tooltip = "I used Grunt in this project!";               break;
    case "gulp":         icon = gulp;         tooltip = "I used Gulp in this project!";                break;
    case "html":         icon = html;         tooltip = "I used HTML in this project!";                break;
    case "illustrator":  icon = illustrator;  tooltip = "I used Illustrator in this project!";         break;
    case "inkscape":     icon = inkscape;     tooltip = "I used Inkscape in this project!";            break;
    case "jade":         icon = jade;         tooltip = "I used JADE in this project!";                break;
    case "java":         icon = java;         tooltip = "I used Java in this project!";                break;
    case "js":           icon = js;           tooltip = "I used JavaScript in this project!";          break;
    case "krakenjs":     icon = krakenjs;     tooltip = "I used KrakenJS in this project!";            break;
    case "laravel":      icon = laravel;      tooltip = "I used Laravel in this project!";             break;
    case "less":         icon = less;         tooltip = "I used LESS in this project!";                break;
    case "linux":        icon = linux;        tooltip = "I used Linux in this project!";               break;
    case "meteor":       icon = meteor;       tooltip = "I used Meteor in this project!";              break;
    case "mocha":        icon = mocha;        tooltip = "I used Mocha in this project!";               break;
    case "mongo":        icon = mongo;        tooltip = "I used Mongo in this project!";               break;
    case "mysql":        icon = mysql;        tooltip = "I used MySQL in this project!";               break;
    case "nginx":        icon = nginx;        tooltip = "I used NGINX in this project!";               break;
    case "node":         icon = node;         tooltip = "I used Node in this project!";                break;
    case "nodewebkit":   icon = nodewebkit;   tooltip = "I used Node Webkit in this project!";         break;
    case "osx":          icon = osx;          tooltip = "I used OSX in this project!";                 break;
    case "photoshop":    icon = photoshop;    tooltip = "I used Photoshop in this project!";           break;
    case "php":          icon = php;          tooltip = "I used PHP in this project!";                 break;
    case "phpstorm":     icon = phpstorm;     tooltip = "I used PHP Storm in this project!";           break;
    case "postgres":     icon = postgres;     tooltip = "I used Postgres in this project!";            break;
    case "protractor":   icon = protractor;   tooltip = "I used Protractor in this project!";          break;
    case "python":       icon = python;       tooltip = "I used Python in this project!";              break;
    case "rails":        icon = rails;        tooltip = "I used Rails in this project!";               break;
    case "react":        icon = react;        tooltip = "I used REACT in this project!";               break;
    case "sass":         icon = sass;         tooltip = "I used SASS in this project!";                break;
    case "seqelize":     icon = seqelize;     tooltip = "I used Seqelize in this project!";            break;
    case "ssh":          icon = ssh;          tooltip = "I used SSH in this project!";                 break;
    case "swift":        icon = swift;        tooltip = "I used Swift in this project!";               break;
    case "tomcat":       icon = tomcat;       tooltip = "I used Tomcat in this project!";              break;
    case "ts":           icon = ts;           tooltip = "I used Type Script in this project!";         break;
    case "ubuntu":       icon = ubuntu;       tooltip = "I used Ubuntu in this project!";              break;
    case "vcf":          icon = vcf;          tooltip = "I used Virtual Contact Files in this project!"; break;
    case "vim":          icon = vim;          tooltip = "I used Vim in this project!";                 break;
    case "visualstudio": icon = visualstudio; tooltip = "I used Visual Studio in this project!";       break;
    case "windows":      icon = windows;      tooltip = "I used Windows in this project!";             break;
    case "wordpress":    icon = wordpress;    tooltip = "I used Wordpress in this project!";           break;
    case "api":          icon = api;          tooltip = "I used an API in this project!";              break;
    case "svg":          icon = svg;          tooltip = "I used SVGs in this project!";                break;
    case "error":        icon = error;        tooltip = "Error!";                                      break;
    default:             icon = error;        tooltip = "Failed to load icon or icon does not exist";  break;
  }

    return(
      <React.Fragment>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={id} toggle={this.toggleTooltip}>
          {tooltip}
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
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
  let icon = error;
  let alt = `${skill} Badge Icon`;
  let tooltip = alt;

  switch(skill) {
    case "bootstrap":    icon = bootstrap;    break;
    case "bower":        icon = bower;        break;
    case "jquery":       icon = jquery;       break;
    case "npm":          icon = npm;          break;
    case "android":      icon = android;      break;
    case "angular":      icon = angular;      break;
    case "apache":       icon = apache;       break;
    case "appcelerator": icon = appcelerator; break;
    case "apple":        icon = apple;        break;
    case "atom":         icon = atom;         break;
    case "aws":          icon = aws;          break;
    case "babel":        icon = babel;        break;
    case "backbone":     icon = backbone;     break;
    case "bitbucket":    icon = bitbucket;    break;
    case "chrome":       icon = chrome;       break;
    case "codeignitor":  icon = codeignitor;  break;
    case "coffeescript": icon = coffeescript; break;
    case "composer":     icon = composer;     break;
    case "cookie":       icon = cookie;       break;
    case "css":          icon = css;          break;
    case "cucumber":     icon = cucumber;     break;
    case "d3js":         icon = d3js;         break;
    case "debian":       icon = debian;       break;
    case "django":       icon = django;       break;
    case "docker":       icon = docker;       break;
    case "drupal":       icon = drupal;       break;
    case "firefox":      icon = firefox;      break;
    case "gatling":      icon = gatling;      break;
    case "gimp":         icon = gimp;         break;
    case "git":          icon = git;          break;
    case "github":       icon = github;       break;
    case "gitlab":       icon = gitlab;       break;
    case "gradle":       icon = gradle;       break;
    case "grunt":        icon = grunt;        break;
    case "gulp":         icon = gulp;         break;
    case "html":         icon = html;         break;
    case "illustrator":  icon = illustrator;  break;
    case "inkscape":     icon = inkscape;     break;
    case "jade":         icon = jade;         break;
    case "java":         icon = java;         break;
    case "js":           icon = js;           break;
    case "krakenjs":     icon = krakenjs;     break;
    case "laravel":      icon = laravel;      break;
    case "less":         icon = less;         break;
    case "linux":        icon = linux;        break;
    case "meteor":       icon = meteor;       break;
    case "mocha":        icon = mocha;        break;
    case "mongo":        icon = mongo;        break;
    case "mysql":        icon = mysql;        break;
    case "nginx":        icon = nginx;        break;
    case "node":         icon = node;         break;
    case "nodewebkit":   icon = nodewebkit;   break;
    case "osx":          icon = osx;          break;
    case "photoshop":    icon = photoshop;    break;
    case "php":          icon = php;          break;
    case "phpstorm":     icon = phpstorm;     break;
    case "postgres":     icon = postgres;     break;
    case "protractor":   icon = protractor;   break;
    case "python":       icon = python;       break;
    case "rails":        icon = rails;        break;
    case "react":        icon = react;        break;
    case "sass":         icon = sass;         break;
    case "seqelize":     icon = seqelize;     break;
    case "ssh":          icon = ssh;          break;
    case "swift":        icon = swift;        break;
    case "tomcat":       icon = tomcat;       break;
    case "ts":           icon = ts;           break;
    case "ubuntu":       icon = ubuntu;       break;
    case "vcf":          icon = vcf;          tooltip = "I used Virtual Contact Files in this project!"; break;
    case "vim":          icon = vim;          break;
    case "visualstudio": icon = visualstudio; break;
    case "windows":      icon = windows;      break;
    case "wordpress":    icon = wordpress;    break;
    case "api":          icon = api;          break;
    case "svg":          icon = svg;          break;
    case "error":        icon = error;        break;
    default: tooltip = "Failed to load icon or icon does not exist";  break;
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

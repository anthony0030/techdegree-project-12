import React from "react";
import PropTypes from "prop-types";
import { UncontrolledTooltip } from "reactstrap";

// Application Badges
import android from "../assets/images/Badges/android.png";
import angular from "../assets/images/Badges/angular.png";
import apache from "../assets/images/Badges/apache.png";
import api from "../assets/images/Badges/api.png";
import appcelerator from "../assets/images/Badges/appcelerator.png";
import apple from "../assets/images/Badges/apple.png";
import atom from "../assets/images/Badges/atom.png";
import aws from "../assets/images/Badges/aws.png";
import babel from "../assets/images/Badges/babel.png";
import backbone from "../assets/images/Badges/backbone.png";
import bitbucket from "../assets/images/Badges/bitbucket.png";
import bootstrap from "../assets/images/Badges/bootstrap.png";
import bower from "../assets/images/Badges/bower.png";
import chrome from "../assets/images/Badges/chrome.png";
import codeignitor from "../assets/images/Badges/codeignitor.png";
import coffeescript from "../assets/images/Badges/coffeescript.png";
import composer from "../assets/images/Badges/composer.png";
import cookie from "../assets/images/Badges/cookie.png";
import css from "../assets/images/Badges/css.png";
import cucumber from "../assets/images/Badges/cucumber.png";
import d3js from "../assets/images/Badges/d3js.png";
import debian from "../assets/images/Badges/debian.png";
import django from "../assets/images/Badges/django.png";
import docker from "../assets/images/Badges/docker.png";
import drupal from "../assets/images/Badges/drupal.png";
import error from "../assets/images/Badges/error.png";
import firefox from "../assets/images/Badges/firefox.png";
import gatling from "../assets/images/Badges/gatling.png";
import gimp from "../assets/images/Badges/gimp.png";
import git from "../assets/images/Badges/git.png";
import github from "../assets/images/Badges/github.png";
import gitlab from "../assets/images/Badges/gitlab.png";
import gradle from "../assets/images/Badges/gradle.png";
import grunt from "../assets/images/Badges/grunt.png";
import gulp from "../assets/images/Badges/gulp.png";
import html from "../assets/images/Badges/html.png";
import illustrator from "../assets/images/Badges/illustrator.png";
import inkscape from "../assets/images/Badges/inkscape.png";
import jade from "../assets/images/Badges/jade.png";
import java from "../assets/images/Badges/java.png";
import jquery from "../assets/images/Badges/jquery.png";
import js from "../assets/images/Badges/js.png";
import krakenjs from "../assets/images/Badges/krakenjs.png";
import laravel from "../assets/images/Badges/laravel.png";
import less from "../assets/images/Badges/less.png";
import linux from "../assets/images/Badges/linux.png";
import meteor from "../assets/images/Badges/meteor.png";
import mocha from "../assets/images/Badges/mocha.png";
import mongo from "../assets/images/Badges/mongo.png";
import mysql from "../assets/images/Badges/mysql.png";
import nginx from "../assets/images/Badges/nginx.png";
import node from "../assets/images/Badges/node.png";
import nodewebkit from "../assets/images/Badges/nodewebkit.png";
import npm from "../assets/images/Badges/npm.png";
import osx from "../assets/images/Badges/osx.png";
import photoshop from "../assets/images/Badges/photoshop.png";
import php from "../assets/images/Badges/php.png";
import phpstorm from "../assets/images/Badges/phpstorm.png";
import postgres from "../assets/images/Badges/postgres.png";
import protractor from "../assets/images/Badges/protractor.png";
import python from "../assets/images/Badges/python.png";
import rails from "../assets/images/Badges/rails.png";
import react from "../assets/images/Badges/react.png";
import sass from "../assets/images/Badges/sass.png";
import seqelize from "../assets/images/Badges/seqelize.png";
import ssh from "../assets/images/Badges/ssh.png";
import svg from "../assets/images/Badges/svg.png";
import swift from "../assets/images/Badges/swift.png";
import tomcat from "../assets/images/Badges/tomcat.png";
import ts from "../assets/images/Badges/ts.png";
import ubuntu from "../assets/images/Badges/ubuntu.png";
import vcf from "../assets/images/Badges/vcf.png";
import vim from "../assets/images/Badges/vim.png";
import visualstudio from "../assets/images/Badges/visualstudio.png";
import windows from "../assets/images/Badges/windows.png";
import wordpress from "../assets/images/Badges/wordpress.png";

function Skill(props) {
  const { skill, projectIndex, skillIndex } = props;
  const id = `id-${projectIndex}-${skillIndex}`;
  let icon = error;
  let tooltip = `${skill} Badge Icon`;
  let alt = tooltip;

  switch (skill) {
    case "bootstrap":
      icon = bootstrap;
      break;
    case "bower":
      icon = bower;
      break;
    case "jquery":
      icon = jquery;
      break;
    case "npm":
      icon = npm;
      break;
    case "android":
      icon = android;
      break;
    case "angular":
      icon = angular;
      break;
    case "apache":
      icon = apache;
      break;
    case "appcelerator":
      icon = appcelerator;
      break;
    case "apple":
      icon = apple;
      break;
    case "atom":
      icon = atom;
      break;
    case "aws":
      icon = aws;
      break;
    case "babel":
      icon = babel;
      break;
    case "backbone":
      icon = backbone;
      break;
    case "bitbucket":
      icon = bitbucket;
      break;
    case "chrome":
      icon = chrome;
      break;
    case "codeignitor":
      icon = codeignitor;
      break;
    case "coffeescript":
      icon = coffeescript;
      break;
    case "composer":
      icon = composer;
      break;
    case "cookie":
      icon = cookie;
      break;
    case "css":
      icon = css;
      break;
    case "cucumber":
      icon = cucumber;
      break;
    case "d3js":
      icon = d3js;
      break;
    case "debian":
      icon = debian;
      break;
    case "django":
      icon = django;
      break;
    case "docker":
      icon = docker;
      break;
    case "drupal":
      icon = drupal;
      break;
    case "firefox":
      icon = firefox;
      break;
    case "gatling":
      icon = gatling;
      break;
    case "gimp":
      icon = gimp;
      break;
    case "git":
      icon = git;
      break;
    case "github":
      icon = github;
      break;
    case "gitlab":
      icon = gitlab;
      break;
    case "gradle":
      icon = gradle;
      break;
    case "grunt":
      icon = grunt;
      break;
    case "gulp":
      icon = gulp;
      break;
    case "html":
      icon = html;
      break;
    case "illustrator":
      icon = illustrator;
      break;
    case "inkscape":
      icon = inkscape;
      break;
    case "jade":
      icon = jade;
      break;
    case "java":
      icon = java;
      break;
    case "js":
      icon = js;
      break;
    case "krakenjs":
      icon = krakenjs;
      break;
    case "laravel":
      icon = laravel;
      break;
    case "less":
      icon = less;
      break;
    case "linux":
      icon = linux;
      break;
    case "meteor":
      icon = meteor;
      break;
    case "mocha":
      icon = mocha;
      break;
    case "mongo":
      icon = mongo;
      break;
    case "mysql":
      icon = mysql;
      break;
    case "nginx":
      icon = nginx;
      break;
    case "node":
      icon = node;
      break;
    case "nodewebkit":
      icon = nodewebkit;
      break;
    case "osx":
      icon = osx;
      break;
    case "photoshop":
      icon = photoshop;
      break;
    case "php":
      icon = php;
      break;
    case "phpstorm":
      icon = phpstorm;
      break;
    case "postgres":
      icon = postgres;
      break;
    case "protractor":
      icon = protractor;
      break;
    case "python":
      icon = python;
      break;
    case "rails":
      icon = rails;
      break;
    case "react":
      icon = react;
      break;
    case "sass":
      icon = sass;
      break;
    case "seqelize":
      icon = seqelize;
      break;
    case "ssh":
      icon = ssh;
      break;
    case "swift":
      icon = swift;
      break;
    case "tomcat":
      icon = tomcat;
      break;
    case "ts":
      icon = ts;
      break;
    case "ubuntu":
      icon = ubuntu;
      break;
    case "vcf":
      icon = vcf;
      break;
    case "vim":
      icon = vim;
      break;
    case "visualstudio":
      icon = visualstudio;
      break;
    case "windows":
      icon = windows;
      break;
    case "wordpress":
      icon = wordpress;
      break;
    case "api":
      icon = api;
      break;
    case "svg":
      icon = svg;
      break;
    case "error":
      icon = error;
      break;
    default:
      tooltip = "Failed to load icon or icon does not exist";
      break;
  }

  return (
    <React.Fragment>
      <UncontrolledTooltip placement="top" target={id}>
        {tooltip}
      </UncontrolledTooltip>
      <div id={id}>
        <img src={icon} alt={alt} className="skill-badge" />
      </div>
    </React.Fragment>
  );
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  projectIndex: PropTypes.number.isRequired,
  skillIndex: PropTypes.number.isRequired,
};

export default Skill;

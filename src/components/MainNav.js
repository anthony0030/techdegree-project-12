import React from "react";
import PropTypes from "prop-types";


import MainNavItem from "./MainNavItem"

function MainNav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <img src={props.logo} alt="logo" className="main-logo" />
        <a className="navbar-brand" href="/home">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <MainNavItem text="Home" link="/home"/> 
            <MainNavItem text="About" link="/about"/> 
            <MainNavItem text="Services" link="/services"/> 
            <MainNavItem text="Contact" link="/contact"/> 
          </ul>
        </div>
      </div>
    </nav>
  );
}

MainNav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainNav;
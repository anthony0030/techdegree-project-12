import React from "react";
import PropTypes from "prop-types";


import MainNavItem from "./MainNavItem"

function MainNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <MainNavItem text="Home" link="#"/> 
            <MainNavItem text="About" link="#"/> 
            <MainNavItem text="Services" link="#"/> 
            <MainNavItem text="Contact" link="#"/> 
          </ul>
        </div>
      </div>
    </nav>
  );
}

MainNav.propTypes = {
  // title: PropTypes.string.isRequired,
  // photo: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired
};

export default MainNav;
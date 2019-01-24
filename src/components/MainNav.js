import React from "react";
import { NavLink } from "react-router-dom";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

// Application Components
import logo from "./logo.svg";
import ScrollBar from "./ScrollBar";

function MainNav(props) {

  const title = "Anthony Veaudry";
  const { toggleNav, isOpen } = props;

  return (
    <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <ScrollBar />
        <NavbarBrand href={`/home`}>
          <img src={logo} alt="logo" className="main-logo" />{title}
        </NavbarBrand>
        <NavbarToggler aria-label="Toggle Navigation Menu" onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to={`/home`}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/contact`}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default MainNav;

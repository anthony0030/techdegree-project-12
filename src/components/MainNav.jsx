import React, { useState } from 'react';

import { NavLink } from "react-router-dom";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

// Application Components
import logo from "../assets/images/logo.svg";
import { ScrollBar } from "components";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const title = "Anthony Veaudry";

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <ScrollBar />
      <NavbarBrand href="/">
        <img src={logo} alt="logo" className="main-logo" />{title}
      </NavbarBrand>
      <NavbarToggler aria-label="Toggle Navigation Menu" onClick={toggleNav} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/" exact>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/fewd">FEWD</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="ux">UX</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </div>
  </Navbar>
  )
}

export default MainNav

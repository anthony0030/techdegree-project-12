import React, {Component} from "react";

import { NavLink } from "react-router-dom";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

// Application Components
import logo from "../../assets/images/logo.svg";
import ScrollBar from "../ScrollBar/ScrollBar";

class MainNav extends Component{

  constructor() {
    super()
    this.state = { isOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){

    const title = "Anthony Veaudry";
    const { isOpen } = this.state;

    return (
      <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <ScrollBar />
        <NavbarBrand href={`/home`}>
          <img src={logo} alt="logo" className="main-logo" />{title}
        </NavbarBrand>
        <NavbarToggler aria-label="Toggle Navigation Menu" onClick={this.toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to={`/home`}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/contact`}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/forum`}>Forum</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}
}

export default MainNav;

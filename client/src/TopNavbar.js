import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem, NavDropdown, Button, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotificationsContainer from "./containers/NotificationsContainer"

const TopNavbar = (props) => {
  let navItems = "";
  if (props.showNavItems) {
    navItems = (
              <div>
                <Nav pullLeft>
                  <Link to="/"><Navbar.Text>Home</Navbar.Text></Link>
                </Nav>
                <Nav pullRight>
                  <NotificationsContainer />
                  <Link to="/public"><Navbar.Text>Public View</Navbar.Text></Link>
                </Nav>
              </div>
              );

  }
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav pullLeft>
            <a className="navbar-brand" href="https://austincodingacademy.com/">
              <img src="./images/austin-logo-white.svg" alt="Austin Coding Academy Logo" />
            </a>
          </Nav>
          <Nav pullRight>
            <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
          </Nav>
          {navItems}
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired
  // showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;


// <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>

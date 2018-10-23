import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "tan" }}
    >
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink className="navbar-brand" to="/home">
            /\_/\
          </NavLink>{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem>
            <NavLink className="nav-item nav-link" to="/form/new">
              ADOPT
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;

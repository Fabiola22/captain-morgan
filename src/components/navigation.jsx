import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "tan" }}
    >
      <NavLink className="navbar-brand" to="/home">
        /\_/\
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/form/new">
              ADOPT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

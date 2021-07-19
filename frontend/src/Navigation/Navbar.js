import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "../Context/userContext";

function NavBar() {
  const user = useContext(UserContext);
  if (!user.username) {
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Home
          </NavLink>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-auto">
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Home
          </NavLink>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-auto">
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

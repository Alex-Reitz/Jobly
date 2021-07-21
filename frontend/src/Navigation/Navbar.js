import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import UserContext from "../Context/userContext";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { currentUser } = useContext(UserContext);
  if (!currentUser.username) {
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/signup"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Signup
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/companies"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Companies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/jobs"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {currentUser.username}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/logout"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
/* 
function NavBar() {
  
  if (!currentUser.username) {
    return (
      <div className="navbar">
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/companies">
          Companies
        </NavLink>
        <NavLink className="nav-link" to="/jobs">
          Jobs
        </NavLink>
        <NavLink className="nav-link" to="/signup">
          Signup
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/companies">
          Companies
        </NavLink>
        <NavLink className="nav-link" to="/jobs">
          Jobs
        </NavLink>
        <NavLink className="nav-link" to="/profile">
          {currentUser.username}
        </NavLink>
        <NavLink className="nav-link" to="/logout">
          Logout
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
 */

import React, { useContext } from "react";
import UserContext from "./Context/userContext";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser.username) {
    return (
      <div className="home-content">
        <h3 className="home-heading">Welcome to Jobly!</h3>
        <div className="home-links">
          <Link className="Link" to="/signup">
            Signup
          </Link>
          <br />
          <Link className="Link" to="/login">
            Login
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-heading">
        <h3>Welcome to Jobly, {currentUser.username}</h3>
      </div>
    );
  }
}

export default Home;

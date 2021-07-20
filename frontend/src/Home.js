import React, { useContext } from "react";
import UserContext from "./Context/userContext";
import { Link } from "react-router-dom";

function Home() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser.username) {
    return (
      <div>
        <h3>Welcome to Jobly!</h3>
        <Link to="/signup">Signup</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Welcome to Jobly {currentUser.username}</h3>
      </div>
    );
  }
}

export default Home;

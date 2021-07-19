import React, { useContext } from "react";
import UserContext from "./Context/userContext";
import { Link } from "react-router-dom";

function Home() {
  const user = useContext(UserContext);
  if (!user.username) {
    return (
      <div>
        <h3>Welcome to Jobly!</h3>
        <Link exact to="/signup">
          Signup
        </Link>
        <br />
        <Link exact to="/login">
          Login
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Welcome to Jobly {user.username}</h3>
      </div>
    );
  }
}

export default Home;

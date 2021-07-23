import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";
import "./Login.css";

function Signup({ login }) {
  const [formData, setFormData] = useState({
    username: "AlexReitz",
    password: "password",
  });
  const { currentUser } = useContext(UserContext);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    login({ ...formData });
    setFormData({
      username: "",
      password: "",
    });
  };

  if (!currentUser.username) {
    return (
      <div className="login-form">
        <form onSubmit={gatherInput}>
          <div className="login-div">
            <label htmlFor="firstName">
              <h6 className="login-input-label">Username</h6>
            </label>
            <input
              className="login-input"
              onChange={handleChange}
              type="text"
              name="username"
              value={formData.username}
              id="username"
            />
          </div>
          <div className="login-div">
            <label htmlFor="firstName">
              <h6 className="login-input-label">Password</h6>
            </label>
            <input
              className="login-input"
              onChange={handleChange}
              type="password"
              name="password"
              value={formData.password}
              id="password"
            />
          </div>

          <button id="login">Login</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="welcome">
        <h3>Welcome, {currentUser.username}</h3>
      </div>
    );
  }
}

export default Signup;

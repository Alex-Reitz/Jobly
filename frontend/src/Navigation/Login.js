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
      <div>
        <form onSubmit={gatherInput}>
          <div>
            <label htmlFor="firstName">
              <h5 className="input-label">Username</h5>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={formData.username}
              id="username"
            />
          </div>
          <div>
            <label htmlFor="firstName">
              <h5 className="input-label">Password</h5>
            </label>
            <input
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
      <div>
        <p>Welcome {currentUser.username}</p>
      </div>
    );
  }
}

export default Signup;

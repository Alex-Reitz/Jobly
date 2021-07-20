import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";

function Signup({ login }) {
  const [formData, setFormData] = useState({
    username: "AlexReitz",
    password: "password",
  });
  const user = useContext(UserContext);

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

  if (!user.username) {
    return (
      <div>
        <form onSubmit={gatherInput}>
          <div>
            <label htmlFor="firstName">Username</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={formData.username}
              id="username"
            />
          </div>
          <div>
            <label htmlFor="firstName">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formData.password}
              id="password"
            />
          </div>

          <button id="signup">Login</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <p>Welcome {user.username}</p>
      </div>
    );
  }
}

export default Signup;

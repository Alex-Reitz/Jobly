import React, { useState, useContext } from "react";
import UserContext from "../Context/userContext";
import "./Signup.css";

function Signup({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const user = useContext(UserContext);
  console.log(!user.username);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    console.log({ ...formData });
    signup({ ...formData });
    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  if (!user.username) {
    return (
      <div>
        <form onSubmit={gatherInput}>
          <div>
            <label htmlFor="username">
              <h6 className="input-label"> Username</h6>
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
            <label htmlFor="password">
              <h6 className="input-label"> Password</h6>
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formData.password}
              id="password"
            />
          </div>
          <div>
            <label htmlFor="firstname">
              <h6 className="input-label"> First Name</h6>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              value={formData.firstName}
              id="firstName"
            />
          </div>
          <div>
            <label htmlFor="lastname">
              <h6 className="input-label">Last Name</h6>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              value={formData.lastName}
              id="lastName"
            />
          </div>
          <div>
            <label htmlFor="email">
              <h6 className="input-label">Email</h6>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={formData.email}
              id="email"
            />
          </div>

          <button id="signup">Signup!</button>
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

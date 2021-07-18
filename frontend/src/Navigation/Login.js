import React, { useState } from "react";

function Signup({ login }) {
  const [formData, setFormData] = useState({
    username: "AlexReitz",
    password: "password",
  });

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
            type="text"
            name="password"
            value={formData.password}
            id="password"
          />
        </div>

        <button id="signup">Login</button>
      </form>
    </div>
  );
}

export default Signup;

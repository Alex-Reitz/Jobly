import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";
import { Link } from "react-router-dom";
import JoblyApi from "../api";

function Profile() {
  const user = useContext(UserContext);
  //sets the form state
  const [formData, setFormData] = useState({
    password: "password",
    firstName: "testing",
    lastName: "tested",
    email: "test@gmail.com",
  });
  //updates state based on change in form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  //Sends the patch request out to backend
  const gatherInput = (evt) => {
    evt.preventDefault();
    console.log({ ...formData });
    update(user.username, { ...formData });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  //sends update to backend
  const update = (username, data) => {
    async function updateUser(username, data) {
      const res = await JoblyApi.update(username, data);
      return res;
    }
    updateUser(username, data);
  };

  if (!user.username) {
    return (
      <div>
        <h3>Login to see your profile</h3>
        <Link to="/signup">Signup</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Your Profile</h3>
        <h5>Username: {user.username}</h5>

        <form onSubmit={gatherInput}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder={user.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              value={formData.firstName}
              id="firstName"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder={user.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              value={formData.lastName}
              id="lastName"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder={user.email}
              onChange={handleChange}
              type="text"
              name="email"
              value={formData.email}
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password to confirm</label>
            <input
              placeholder="Your password"
              onChange={handleChange}
              type="text"
              name="password"
              value={formData.password}
              id="password"
            />
          </div>
          <button id="update">Update</button>
        </form>
      </div>
    );
  }
}

export default Profile;

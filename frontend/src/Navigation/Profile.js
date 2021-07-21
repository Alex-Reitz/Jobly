import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";
import { Link } from "react-router-dom";
import JoblyApi from "../api";
import "./Profile.css";

function Profile() {
  const { currentUser } = useContext(UserContext);
  //sets the form state
  const [formData, setFormData] = useState({
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
    update(currentUser.username, { ...formData });
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

  if (!currentUser.username) {
    return (
      <div className="logged-in-warning">
        <h3>Login to see your profile</h3>
        <Link className="Link" to="/signup">
          Signup
        </Link>
        <Link className="Link" to="/login">
          Login
        </Link>
      </div>
    );
  } else {
    return (
      <div className="profile-content">
        <h4 className="profile-heading">
          Update your profile here, {currentUser.username}
        </h4>
        <form onSubmit={gatherInput}>
          <div className="profile-div">
            <label className="profile-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="profile-input"
              placeholder={currentUser.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              value={formData.firstName}
              id="firstName"
            />
          </div>
          <div className="profile-div">
            <label className="profile-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="profile-input"
              placeholder={currentUser.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              value={formData.lastName}
              id="lastName"
            />
          </div>
          <div className="profile-div">
            <label className="profile-label" htmlFor="email">
              Email
            </label>
            <input
              className="profile-input"
              placeholder={currentUser.email}
              onChange={handleChange}
              type="text"
              name="email"
              value={formData.email}
              id="email"
            />
          </div>
          <div className="profile-div">
            <label className="profile-label" htmlFor="password">
              Password
            </label>
            <input
              className="profile-input"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password To Confirm Update"
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

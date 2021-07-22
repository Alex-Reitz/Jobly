import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";
import JoblyApi from "../api";

function Applications() {
  const { currentUser, applicationIds } = useContext(UserContext);
  const jobIds = Array.from(applicationIds);
  console.log(jobIds);
  if (!currentUser.username) {
    return (
      <div>
        <h3>Please login or signup to see your applications</h3>
      </div>
    );
  } else if (currentUser.username && applicationIds.length === 0) {
    return (
      <div>
        <h3>You haven't applied to any jobs yet</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Here are all the Companies you've applied to</h3>

        {jobIds.map((job) => (
          <li key={job}>
            <strong>Job ID: </strong>
            {job}
          </li>
        ))}
      </div>
    );
  }
}

export default Applications;

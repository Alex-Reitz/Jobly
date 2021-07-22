import React, { useContext, useEffect, useState } from "react";
import JobCard from "../Jobs/JobCard";
import UserContext from "../Context/userContext";

function Applications() {
  const { currentUser, applicationIds } = useContext(UserContext);
  console.log(currentUser.applications);
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
        <h3>Here are all the jobs you've applied to</h3>
      </div>
    );
  }
}

export default Applications;

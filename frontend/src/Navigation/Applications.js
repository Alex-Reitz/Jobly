import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";
import JoblyApi from "../api";

function Applications() {
  const { currentUser, applicationIds } = useContext(UserContext);
  const [companiesApplied, setCompaniesApplied] = useState([]);

  const arrayIds = Array.from(applicationIds);
  async function getJobs(id) {
    const res = await JoblyApi.getJob(id);
    setCompaniesApplied([...companiesApplied, res.job.company.name]);
    return res.job.company.name;
  }

  for (let i = 0; i < arrayIds.length; i++) {
    getJobs(arrayIds[i]);
  }

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
      </div>
    );
  }
}

export default Applications;

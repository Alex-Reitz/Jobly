import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/userContext";
import "./Applications.css";
import JoblyApi from "../api";

function Applications() {
  const { currentUser, applicationIds } = useContext(UserContext);
  const jobIds = Array.from(applicationIds);
  const [jobHandles, setJobHandles] = useState([]);

  const getJobApplications = () => {
    async function getJob(jobID) {
      const res = await JoblyApi.getJob(jobID);
      setJobHandles((jobHandles) => [...jobHandles, res.job.company.name]);
      return res;
    }
    for (let i = 0; i < jobIds.length; i++) {
      getJob(jobIds[i]);
    }
  };
  useEffect(() => {
    getJobApplications();
  }, [applicationIds]);

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
        <h3 className="applications-heading">
          Here are all the Companies you've applied to
        </h3>

        {jobHandles.map((job) => (
          <li className="application-list-item" key={job}>
            {job}
          </li>
        ))}
      </div>
    );
  }
}

export default Applications;

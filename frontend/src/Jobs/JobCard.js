import React, { useContext, useState, useEffect } from "react";
import JoblyApi from "../api";
import UserContext from "../Context/userContext";

/* {id: 20, title: "Tourist information centre manager", salary: 88000, equity: "0", companyHandle: "foster-rice", …}
companyHandle: "foster-rice"
companyName: "Foster-Rice"
equity: "0"
id: 20
salary: 88000
title: "Tourist information centre manager" */

function JobCard({ info }) {
  const { currentUser, applicationIds } = useContext(UserContext);

  useEffect(() => {}, [applicationIds]);

  const apply = (username, jobid) => {
    async function applyToJob(username, jobid) {
      const res = await JoblyApi.apply(currentUser.username, info.id);
      return res;
    }
    applyToJob(username, jobid);
  };
  return (
    <div className="job-content">
      <div className="company-title">
        {info.companyName ? (
          <p>
            <strong>Company Name: </strong>
            {info.companyName}
          </p>
        ) : undefined}
      </div>
      <div className="job-title">
        {info.title ? (
          <p>
            <strong>Job Title: </strong>
            {info.title}
          </p>
        ) : undefined}
      </div>
      <div className="job-salary">
        {info.salary ? (
          <p>Job Salary: {info.salary}</p>
        ) : (
          <p>Sorry, no salary data to show.</p>
        )}
      </div>
      <div className="job-equity">
        {info.equity > 0 ? (
          <p>Job equity: {info.equity}</p>
        ) : (
          <p>Sorry, no equity data to show.</p>
        )}
      </div>
      <div className="job-application">
        {applicationIds.has(info.id) ? (
          <p>You applied</p>
        ) : (
          <button id={info.id} onClick={apply}>
            Apply
          </button>
        )}
      </div>

      <hr></hr>
    </div>
  );
}

export default JobCard;

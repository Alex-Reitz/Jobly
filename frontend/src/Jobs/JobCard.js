import React, { useContext, useEffect } from "react";
import JoblyApi from "../api";
import UserContext from "../Context/userContext";
import "./JobCard.css";

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
          <p className="jobcard-company-name">
            <strong>Company Name: </strong>
            {info.companyName}
          </p>
        ) : undefined}
      </div>
      <div className="job-title-card">
        {info.title ? (
          <p>
            <strong>Job Title: </strong>
            {info.title}
          </p>
        ) : undefined}
      </div>
      <div className="job-salary-card">
        {info.salary ? (
          <strong>Salary: ${info.salary}</strong>
        ) : (
          <p>Sorry, no salary data to show.</p>
        )}
      </div>
      <div className="job-equity-card">
        {info.equity > 0 ? (
          <strong>Equity: {info.equity}</strong>
        ) : (
          <p>Sorry, no equity data to show.</p>
        )}
      </div>
      <div className="job-application-card">
        {applicationIds.has(info.id) ? (
          <h4 className="job-status">You applied!</h4>
        ) : (
          <button className="job-card-apply" id={info.id} onClick={apply}>
            Apply
          </button>
        )}
      </div>
    </div>
  );
}

export default JobCard;

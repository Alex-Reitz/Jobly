import React, { useContext } from "react";
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
  const user = useContext(UserContext);
  const apply = (username, jobid) => {
    async function applyToJob(username, jobid) {
      const res = await JoblyApi.apply(user.username, info.id);
      console.log(res);
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
      <button onClick={apply}>Apply</button>
      <hr></hr>
    </div>
  );

  /* if (!info.equity && !info.salary) {
    return (
      <div className="content">
        <p>
          <strong>Company Name: </strong>
          {info.companyName}
        </p>
        <p>
          <strong>Job Title: </strong>
          {info.title}
        </p>
        <button>Apply</button>
        <hr />
      </div>
    );
  } else if ((!info.equity || info.equity === "0") && info.salary) {
    return (
      <div className="content">
        <p>
          <strong>Company Name: </strong>
          {info.companyName}
        </p>
        <p>
          <strong>Job Title: </strong>
          {info.title}
        </p>
        <p>
          <strong>Salary:</strong>${info.salary}
        </p>
        <p>Equity Options Not Available</p>
        <button>Apply</button>
        <hr></hr>
      </div>
    );
  } else if (!info.salary) {
    return (
      <div className="content">
        <p>
          <strong>Company Name: </strong>
          {info.companyName}
        </p>
        <p>
          <strong>Job Title: </strong>
          {info.title}
        </p>
        <p>Salary Options Not Available</p>
        <p>
          <strong>Equity:</strong>
          {info.equity}
        </p>
        <button>Apply</button>
        <hr></hr>
      </div>
    );
  } else {
    return (
      <div className="content">
        <p>
          <strong>Company Name: </strong>
          {info.companyName}
        </p>
        <p>
          <strong>Job Title: </strong>
          {info.title}
        </p>
        <p>
          <strong>Salary:</strong>${info.salary}
        </p>
        <p>
          <strong>Equity:</strong>
          {info.equity}
        </p>
        <button>Apply</button>
        <hr></hr>
      </div>
    );
  } */
}

export default JobCard;

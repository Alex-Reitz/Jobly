import React from "react";

/* {id: 20, title: "Tourist information centre manager", salary: 88000, equity: "0", companyHandle: "foster-rice", …}
companyHandle: "foster-rice"
companyName: "Foster-Rice"
equity: "0"
id: 20
salary: 88000
title: "Tourist information centre manager" */

function JobCard({ info }) {
  if (!info.equity && !info.salary) {
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
  }
}

export default JobCard;

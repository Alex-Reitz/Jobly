import React from "react";

/* {id: 20, title: "Tourist information centre manager", salary: 88000, equity: "0", companyHandle: "foster-rice", …}
companyHandle: "foster-rice"
companyName: "Foster-Rice"
equity: "0"
id: 20
salary: 88000
title: "Tourist information centre manager" */

function JobCard({ info }) {
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
      <hr></hr>
    </div>
  );
}

export default JobCard;

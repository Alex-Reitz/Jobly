import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "../Jobs/JobCard";
import UserContext from "../Context/userContext";

function CompanyDetails() {
  const { handle } = useParams();
  const [companyData, setCompanyData] = useState([]);
  const [jobsData, setJobsData] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    async function getCompanyHandle(handle) {
      let res = await JoblyApi.getCompany(handle);
      setCompanyData(res);
      setJobsData(res.jobs);
      return res;
    }
    getCompanyHandle(handle);
  }, [handle]);

  if (!currentUser.username) {
    return (
      <div>
        <h1>You must be logged in to access a company detail page</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Company Details</h1>
        <p>
          <strong>Company Name: </strong>
          {companyData.name}
        </p>
        <p>
          <strong>Description: </strong>
          {companyData.description}
        </p>
        <p>
          <strong>Company Handle: </strong>
          {companyData.handle}
        </p>
        <p>
          <strong>Number of Employees: </strong>
          {companyData.numEmployees}
        </p>
        <hr></hr>
        <div className="jobs-data">
          <h4>Jobs posted for this company</h4>
          <hr></hr>
          {jobsData.map((job) => (
            <JobCard key={job.id} info={job} />
          ))}
        </div>
      </div>
    );
  }
}

export default CompanyDetails;

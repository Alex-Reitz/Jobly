import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "../Jobs/JobCard";
import UserContext from "../Context/userContext";
import "./CompanyDetail.css";

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
      <div className="logged-in-warning">
        <h1>You must be logged in to access a company detail page</h1>
      </div>
    );
  } else {
    return (
      <div className="company-detail-container">
        <h1 className="heading">Company Details</h1>
        <p className="company-name">
          <strong>Company Name: </strong>
          {companyData.name}
        </p>
        <p className="company-description">
          <strong>Description: </strong>
          {companyData.description}
        </p>
        <p className="company-handle">
          <strong>Company Handle: </strong>
          {companyData.handle}
        </p>
        <p className="num-employees">
          <strong>Number of Employees: </strong>
          {companyData.numEmployees}
        </p>
        <div className="jobs-data">
          <h1 className="jobs-heading">Jobs posted by {companyData.name}</h1>
          {jobsData.map((job) => (
            <JobCard key={job.id} info={job} />
          ))}
        </div>
      </div>
    );
  }
}

export default CompanyDetails;

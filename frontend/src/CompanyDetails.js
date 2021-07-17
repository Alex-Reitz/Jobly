import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";

function CompanyDetails() {
  //TODO Filtering on backend to show jobs for a particular company
  const { handle } = useParams();
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    async function getCompanyHandle(handle) {
      let res = await JoblyApi.getCompany(handle);
      setCompanyData(res);
      return res;
    }
    getCompanyHandle(handle);
  }, [handle]);

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
    </div>
  );
}

export default CompanyDetails;

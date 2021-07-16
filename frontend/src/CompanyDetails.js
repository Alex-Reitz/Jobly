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
      <p>{companyData.name}</p>
      <p>{companyData.description}</p>
      <p>{companyData.handle}</p>
      <p>{companyData.numEmployees}</p>
    </div>
  );
}

export default CompanyDetails;

import React, { useState, useEffect, useContext } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api";
import UserContext from "../Context/userContext";
import "./CompanyList.css";

function CompanyList() {
  const [companyFormData, setCompanyFormData] = useState({
    name: "",
  });
  const [companies, setCompanies] = useState([]);
  const { currentUser } = useContext(UserContext);
  //Gets the companies list from backend on page load
  useEffect(() => {
    async function getCompanies() {
      const res = await JoblyApi.getCompanies();
      setCompanies(res.companies);
      return res.companies;
    }
    getCompanies();
  }, []);
  //Gathers input from form submission
  const gatherCompanyInput = (evt) => {
    evt.preventDefault();
    searchCompanyNames({ ...companyFormData });
  };
  //Updates form data
  const handleCompanyChange = (evt) => {
    const { name, value } = evt.target;
    setCompanyFormData((companyFormData) => ({
      ...companyFormData,
      [name]: value,
    }));
  };

  //function to search Company names or return all companies if form is blank on submission
  const searchCompanyNames = (data) => {
    if (data.name.length === 0) {
      async function getCompanies() {
        const res = await JoblyApi.getCompanies();
        setCompanies(res.companies);
        return res.companies;
      }
      getCompanies();
    } else {
      async function searchHandle() {
        let res = await JoblyApi.searchCompanies(data);
        setCompanies(res.companies);
        return res.companies;
      }
      searchHandle();
    }
  };
  if (!currentUser.username) {
    return (
      <div className="logged-in-warning">
        <h1>You must be logged in to access the company list</h1>
      </div>
    );
  } else {
    return (
      <div className="company-list-container">
        <h1 className="company-heading">Here's a list of all companies</h1>
        <div className="search">
          <form onSubmit={gatherCompanyInput}>
            <label className="search-company-label" htmlFor="name">
              Search Company Names
            </label>
            <input
              classname="company-list--search-input"
              onChange={handleCompanyChange}
              type="text"
              name="name"
              value={companyFormData.name}
              id="name"
            />
          </form>
        </div>
        <hr></hr>
        {companies.map((company) => (
          <CompanyCard key={company.handle} info={company} />
        ))}
      </div>
    );
  }
}

export default CompanyList;

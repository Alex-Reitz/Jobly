import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import JoblyApi from "./api";

function App() {
  //state passed down to list component depending on which route a user takes
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  //Gets the companies list from backend on page load
  useEffect(() => {
    async function getCompanies() {
      const res = await JoblyApi.getCompanies();
      setCompanies(res.companies);
      return res.companies;
    }
    getCompanies();
  }, []);
  //Gets jobs list from backend on page load
  useEffect(() => {
    async function getJobs() {
      const res = await JoblyApi.getJobs();
      setJobs(res.jobs);
      return res.jobs;
    }
    getJobs();
  }, []);
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
        console.log(res);
        setCompanies(res.companies);
        return res.companies;
      }
      searchHandle();
    }
  };
  //function to get all jobs by title matching a query from the search form, returns all jobs if form is blank on submission
  const searchJobNames = (data) => {
    if (data.title.length === 0) {
      async function getJobs() {
        const res = await JoblyApi.getJobs();
        setJobs(res.jobs);
        return res.jobs;
      }
      getJobs();
    } else {
      async function searchName() {
        let res = await JoblyApi.searchJobs(data);
        console.log(res);
        setJobs(res.jobs);
        return res.jobs;
      }
      searchName();
    }
  };

  return (
    <div className="App">
      <Routes
        companies={companies}
        jobs={jobs}
        searchCompanyNames={searchCompanyNames}
        searchJobNames={searchJobNames}
      />
    </div>
  );
}

export default App;

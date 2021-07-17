import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import JoblyApi from "./api";

function App() {
  //state passed down to list component depending on which route a user takes
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
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
        setJobs(res.jobs);
        return res.jobs;
      }
      searchName();
    }
  };
  //register as a new user
  const signupUser = (data) => {
    async function signUp(data) {
      const res = await JoblyApi.signUp(data);
      setToken(res.token);
      return res;
    }
    signUp(data);
  };
  //Login for an existing user
  const loginUser = (data) => {
    async function login(data) {
      const res = await JoblyApi.login(data);
      setCurrentUser(res.user);
      setToken(res.token);
      console.log(token, currentUser);
      return res;
    }
    login(data);
  };
  //Call backend to get information about a newly logged in user and update currentUser state when token changes
  useEffect(() => {
    async function getUserInfo() {
      const res = await JoblyApi.getUser();
      console.log(res);
      return res;
    }
    getUserInfo();
  }, [token]);

  return (
    <div className="App">
      <Routes
        companies={companies}
        jobs={jobs}
        searchCompanyNames={searchCompanyNames}
        searchJobNames={searchJobNames}
        signup={signupUser}
        login={loginUser}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import JoblyApi from "./api";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";
import NavBar from "./Navbar";
import List from "./List";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function Routes() {
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
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/companies">
            <List search={searchCompanyNames} list={companies} />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetails />
          </Route>
          <Route exact path="/jobs">
            <List search={searchJobNames} list={jobs} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Redirect exact to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Routes;

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
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const res = await JoblyApi.getCompanies();
      setCompanies(res.companies);
      return res.companies;
    }
    getCompanies();
  }, []);

  useEffect(() => {
    async function getJobs() {
      const res = await JoblyApi.getJobs();
      setJobs(res.jobs);
      return res.jobs;
    }
    getJobs();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/companies">
            <List list={companies} />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetails />
          </Route>
          <Route exact path="/jobs">
            <List list={jobs} />
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

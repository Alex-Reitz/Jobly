import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";
import NavBar from "./Navbar";
import List from "./List";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function Routes({
  companies,
  jobs,
  searchCompanyNames,
  searchJobNames,
  signup,
  login,
}) {
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
            <Login login={login} />
          </Route>
          <Route exact path="/signup">
            <Signup signup={signup} />
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

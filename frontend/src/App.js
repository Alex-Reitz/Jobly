import React, { useEffect, useState } from "react";
import "./App.css";
import Routes from "./Navigation/Routes";
import JoblyApi from "./api";
import UserContext from "./Context/userContext";
import useLocalStorage from "./hooks";
import jwt from "jsonwebtoken";

function App() {
  //state passed down to list component depending on which route a user takes
  const [token, setToken] = useLocalStorage("token", "");
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", "");
  const [applicationIds, setApplicationIds] = useState(new Set([]));

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
      return res;
    }
    login(data);
  };
  //Logout
  const logout = () => {
    setCurrentUser({});
    setToken("");
    localStorage.clear();
  };
  //Call backend to get information about a newly logged in user and update currentUser state when token changes
  useEffect(() => {
    if (!token) {
      return;
    } else {
      async function getUserInfo() {
        let { username } = jwt.decode(token);
        // put the token on the Api class so it can use it to call the API.
        JoblyApi.token = token;
        const res = await JoblyApi.getUser(username);
        setApplicationIds(new Set(res.user.applications));
        return res;
      }
      getUserInfo();
    }
  }, [token]);
  console.log(applicationIds);
  return (
    <UserContext.Provider value={{ currentUser, applicationIds }}>
      <div className="App">
        <Routes signup={signupUser} login={loginUser} logout={logout} />
      </div>
    </UserContext.Provider>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Navigation/Routes";
import JoblyApi from "./api";
import UserContext from "./Context/userContext";
import useLocalStorage from "./hooks";

function App() {
  //state passed down to list component depending on which route a user takes
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {});

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
      console.log(res);
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
  };
  //Call backend to get information about a newly logged in user and update currentUser state when token changes
  useEffect(() => {
    async function getUserInfo() {
      const res = await JoblyApi.getUser(currentUser.username);
      return res;
    }
    getUserInfo();
  }, [token, currentUser]);

  return (
    <UserContext.Provider value={currentUser}>
      <div className="App">
        <Routes signup={signupUser} login={loginUser} logout={logout} />
      </div>
    </UserContext.Provider>
  );
}

export default App;

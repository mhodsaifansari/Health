import React, { useState } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Map from "./components/Map Stats/Map";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import UserMedicalData from './components/userMedicalData/UserMedicalData';
import Verify from "./components/Authentication/Verify";
import User from "./components/User/User";
import HospitalRegistration from "./components/Hospital/HospitalRegistration";
import HospitalVerify from "./components/Hospital/HospitalVerify";
import HospitalHome from "./components/Hospital/HospitalHome";
import HospitalLogin from "./components/Hospital/HospitalLogin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/map">
        <Map />
      </Route>

      <Route path="/verify">
        <Verify toggleLoggedIn={loginHandler} />
      </Route>
      <Route path="/addMedicalDetails">
        <UserMedicalData></UserMedicalData>
      </Route>
      <Route path="/user">
        <User isLoggedIn={isLoggedIn}></User>
      </Route>
      <Route path="/hospital/signup">
        <HospitalRegistration></HospitalRegistration>
      </Route>
      <Route path="/hospital/verify">
        <HospitalVerify toggleLoggedIn={loginHandler}></HospitalVerify>
      </Route>
      <Route path="/hospital/home">
        {isLoggedIn==true?<HospitalHome></HospitalHome>:<HospitalLogin></HospitalLogin>}
      </Route>
      <Route path="/hospital/login">
        <HospitalLogin></HospitalLogin>
      </Route>
    </div>
  );
}

export default App;

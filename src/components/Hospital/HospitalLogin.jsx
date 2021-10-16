import React from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Buttons/Button";
import { useState } from "react";
import axios from "axios";
import Input from "./../UI/Input/Input";
import { useHistory } from "react-router";
function HospitalLogin() {
  const [addhar, setaadhar] = useState("");
  const history=useHistory();
  localStorage.clear();
  const loginHandler = () => {
   
    axios.post('https://mhodsaifansari.pythonanywhere.com/hospital/login-otp',{
    "eid":localStorage.getItem("eid")   
    }).then((data)=>{console.log(data.data)
      history.push("/hospital/verify");
    })
    .catch((err)=>{console.log(err)})
    
  };

  return (
    <Card className={classes["login-modal"]}>
      <div className={classes.heading}>Login</div>
      <Input
        placeholder="Enter Hospital ID..."
        onChange={(e) => {
          setaadhar(e.target.value);
        }}
        value={addhar}
      />
      <Button onClick={loginHandler}>Send OTP</Button>
      <p>Don’t have an account? <a href="../hospital/signup">Sign up here!</a></p>
    </Card>
  );
}

export default HospitalLogin;

import React from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Buttons/Button";
import { useState } from "react";
import axios from "axios";
import Input from "./../UI/Input/Input";
import { useHistory } from "react-router";
import { Path } from "leaflet";
function Login() {
  const [addhar, setaadhar] = useState("");
  const history=useHistory();
  const loginHandler = () => {
    localStorage.setItem('aadhar',addhar)
    axios.post('https://mhodsaifansari.pythonanywhere.com/login-otp',{
      "aadhar":addhar
    }).then((data)=>{console.log(data.data)
      history.push("/verify");
    })
    .catch((err)=>{console.log(err)})
    
  };

  return (
    <Card className={classes["login-modal"]}>
      <div className={classes.heading}>Login</div>
      <Input
        placeholder="Enter Adhar Number..."
        onChange={(e) => {
          setaadhar(e.target.value);
        }}
        value={addhar}
      />
      <Button onClick={loginHandler}>Send OTP</Button>
      <p>Don’t have an account? Sign up here!</p>
    </Card>
  );
}

export default Login;

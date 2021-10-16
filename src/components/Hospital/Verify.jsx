import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../UI/Buttons/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./Verify.module.css";

const Verify = (props) => {
  const history = useHistory();
  const [otp, setOTP] = useState(0);
  const[err,setErr]=useState('');
  const verifyHandler = () => {
    const aadhar=localStorage.getItem('aadhar');
    axios.post('https://mhodsaifansari.pythonanywhere.com/verify-otp',{
      'aadhar':aadhar,
      'otp':otp
    })
    .then((data)=>{
      console.log(data.data);
      localStorage.setItem('access',`${data.data.access}`);
      props.toggleLoggedIn();
      history.push("/home");
    })
   .catch((err)=>{
     console.log(err);
      if(err.request)
      {
        setErr("Invalid OTP");
      }
   })
  
  };

  return (
    <Card className={classes.verify}>
      {err}
      <Input
        placeholder="Enter OTP"
        value={otp}
        onChange={(val) => setOTP(val.target.value)}
      />
      <Button onClick={verifyHandler}>Submit OTP</Button>
    </Card>
  );
};

export default Verify;

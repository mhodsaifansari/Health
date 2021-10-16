import React from "react";
import Card from "../UI/Card/Card";
import axios from "axios";
import { useState,useEffect } from "react/cjs/react.development";
import download from "downloadjs";
function EMedCard({isLoggedIn}) {
  const [userData,setData]=useState('');
  useEffect(() => {
    if(localStorage.getItem('type')=="user"){
    const access=localStorage.getItem('access');
    axios.post('https://mhodsaifansari.pythonanywhere.com/user-info',{},{
      headers:{
        Authorization:`Bearer ${access}`
      }
    })
    .then((res)=>{
      setData(res.data);
    })
  }
    return () => {
    }
  }, [])


  return  (<Card>
    {localStorage.getItem('type')=="user"?
              userData==''?"Loading your data ...":<>
                <h2>Name: {userData.name}</h2>
                <h3>E-ID :{userData.user.username}</h3>
                <h4>is verified: {userData.is_verified==true?"True":"Not Verified"}</h4>
                <h3>Address</h3>
                <div>
                  <p>Address: {`${userData.user_address.address_line1}, ${userData.user_address.state}:${userData.user_address.pincode} ${userData.user_address.country}`}</p>
                </div>
                <h3>Medical Details</h3>
                    <div>
                    <p>Height: {userData.basic_medical_data.height}</p>
                    <p>Weight: {userData.basic_medical_data.weight}</p>
                    <p>Blood group: {userData.basic_medical_data.blood_group}</p>
                    </div>
                <h3>Allergies</h3>
                    {userData.basic_medical_data.allergies.map((e)=>{
                       return  <p> {e.name}</p>
                    })}
                <h3>Disease</h3>
                    {userData.basic_medical_data.disease.map((e)=>{
                       return  <p> name:{e.name},last diagnose{e.last_diagnose},Currently have:{e.is_current===true?"Yes":"No"}</p>
                    })}
                <h3>Surgery</h3>
                    {userData.basic_medical_data.surgery.map((e)=>{
                       return  <p> name:{e.name}  happend: {e.date}</p>
                    })}
                  <button onClick={(e)=>{
                    axios.post('https://mhodsaifansari.pythonanywhere.com/card',{},{
                      headers:{
                        Authorization:`Bearer ${localStorage.getItem('access')}`
                      }
                    })
                    .then((res)=>{
                      const content=res.headers['content-type'];
                      download(res.data,"ecard.pdf",content)
                    })
                    .catch((err)=>{console.log(err)})
                  }}>Download Your E-ID</button>
                  </>:<h3>Please <a href="../login">Login</a></h3> }
  </Card>);
}

export default EMedCard;

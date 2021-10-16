import React from 'react'
import Input from '../UI/Input/Input'
import {useState} from 'react'
import Button from '../UI/Buttons/Button';
import axios from 'axios';
import Card from '../UI/Card/Card';
function HospitalHome() {
    const [EID,setEID]=useState('');
    const [userData,setData]=useState('');
    const getinfo=(eid)=>{
        axios.post('https://mhodsaifansari.pythonanywhere.com/hospital/getInfo',{
            "eid":EID
        },{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access')}`
            }
        })
        .then((res)=>{
          console.log(res.data);  
          setData(res.data)
        })
    }
    return (
        <div>
            <Input
                id="EID"
                type="text"
                placeholder="Enter patient's E-ID"
                value={EID}
                onChange={(e)=>{setEID(e.target.value)}}
            ></Input>
            <Button onClick={(e)=>{console.log(EID); getinfo(EID)}}>Get EID</Button>
            {userData==''?<></>:
            
            <Card>
                <h2>Name: {userData.name}</h2>
                <h4>is verified: {userData.is_verified==true?"True":"Not Verified"}</h4>
                
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
                </Card>}
        </div>
    )
}

export default HospitalHome

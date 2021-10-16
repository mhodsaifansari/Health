import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
function User({isLoggedIn}) {
    const [userData,setData]=useState('');
    const [err,seterr]=useState('');
    useEffect(() => {
        if(isLoggedIn==true)
        {   const type=localStorage.getItem('type');
            const access=localStorage.getItem('access')
            const eid=localStorage.getItem('eid')
            if(type=="user")
            {
                axios.post('https://mhodsaifansari.pythonanywhere.com/user-info',{'eid':eid},{headers:{Authorization:`Bearer ${access}`}})
                .then((res)=>{
                    console.log(res.data);
                    setData(res.data);
                })
                .catch((err)=>{

                    if(err.response)
                    {
                        if(err.response.data==401)
                        {
                            seterr('Not Authorizared');
                        }
                    }
                })
            }
        }    
        return () => {
        }
    }, [])
    
    
    return (
        <div>
            {isLoggedIn==true?err==''?userData:err:"Please login"}
        </div>
    )
}

export default User

import React from 'react'
import { useState ,useRef} from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Buttons/Button'
function UserMedicalData(){
const [userData,setUserData]=useState({'height':'','weight':'','blood_group':'','allergiers':[],'surgery':[],'disease':[]})
const [listCount,setListCount]=useState({'allergiers':0,'surgery':0})
const addNewInput=(text,node)=>{
    setListCount((prev)=>{return {...prev,allergiers:prev.allergiers+1}})
    const handler=(e)=>{console.log(e.target.value)};
    node.insertAdjacentHTML('beforebegin',`
    <div>
        
        <Input id=${"user-"+text+"-"+listCount.allergiers} type="text"> 
        </div>`)
    
}
const handler=(e,text)=>{
    
    setUserData((prev)=>{
        const newObj=prev;
        newObj[text]=e.target.value;
        return newObj;    
    });
}
const listHandler=(parentNode,text)=>{
    console.log(parentNode.childNodes[1].childNodes)
    let textList=[];
    parentNode.childNodes[1].childNodes.forEach((ele)=>{
        if(ele.nodeName==="DIV")
        {
            textList.push(ele.children[0].value)
        }
    });
    console.log(textList)
    setUserData((prev)=>{
        const newObj=prev;
        newObj[text]=textList;
        return newObj; 
    });
}
{/* <label htmlFor=${"user-"+text+"-"+userData[text].length}>${text}</label> */}
return (
<>
<form onSubmit={(e)=>{e.preventDefault()}}>
    <div>
      <label htmlFor="user-height">Height</label>
       <Input 
        id='user-height'
        type="tel"
        placeholder="Enter Your height in centimeter"
        onChange={(e)=>{console.log(e.target.value);handler(e,'height')}}
        maxLength="3"
       />     
    </div>
    <div>
        <label htmlFor="user-weight">Weight</label>
        <Input
        id="user-weight"
        type="tel"
        placeholder="Enter your weight in Kilogram"
        onChange={(e)=>{console.log(e.target.value);handler(e,'weight')}}
        />
    </div>
    <div>
        <label htmlFor="user-blood-group">Enter User's Blood Group</label>
        <Input
        id="user-blood-group"
        type="text"
        placeholder="Enter your blood group"
        onChange={(e)=>{console.log(e.target.value);handler(e,'blood_group')}}
        maxLength="4"
        />
    </div>
    <div>
        <label htmlFor="user-allergiers">Your Allergers</label>
        <div>
        
        {/* <Input
        id={"user-allergiers-"+userData.allergiers.length+1}
        type="text"
        placeholder="Enter your allerge"
        onChange={(e)=>{console.log(e.target.value)}}
        /> */}
        <Button onClick={(e)=>{console.log(e.target); addNewInput("allergiers",e.target);}}>Add</Button>
        </div>
        
        
    </div>
    <div>
        <label htmlFor="user-surgery">Your surgeries</label>
        <div>
        
        {/* <Input
        id={"user-allergiers-"+userData.allergiers.length+1}
        type="text"
        placeholder="Enter your allerge"
        onChange={(e)=>{console.log(e.target.value)}}
        /> */}
        <Button onClick={(e)=>{ addNewInput("surgery",e.target);}}>Add</Button>
        </div>
        
        
    </div>
    <div>
        <label htmlFor="user-disease">Your Disease</label>
        <div>
        
        {/* <Input
        id={"user-allergiers-"+userData.allergiers.length+1}
        type="text"
        placeholder="Enter your allerge"
        onChange={(e)=>{console.log(e.target.value)}}
        /> */}
        <Button onClick={(e)=>{ addNewInput("disease",e.target);}}>Add</Button>
        </div>
        
        
    </div>
    <Button onClick={(e)=>{
        console.log(e.target);
        listHandler(e.target.form.children[3],"allergiers");
        listHandler(e.target.form.children[4],'surgery');
        listHandler(e.target.form.children[5],'disease');

        console.log(userData);
        }}>Submit Data</Button>
</form>
</>
)

}

export default UserMedicalData;
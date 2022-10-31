import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate=useNavigate();
    const[userdataname,setUserdataname]=useState([]);
    const[userlogname,setuserLogname]=useState('');
    const[pass,setPass]=useState('');
    // login button functinality
    const submitHandler=(event)=>{
      event.preventDefault();
      let userlogdata=localStorage.getItem("data",userdataname)
      let userlogdata1=JSON.parse(userlogdata)
      console.log(userlogdata1);
      for(var i=0;i<userlogdata1.length;i++){
        // checking the data which is taken from user
        if(userlogname===userlogdata1[i].username && pass===userlogdata1[i].password){
          console.log("success");
          navigate('/Feed');
        }
        else if(userlogname!==userlogdata1[i].username){
          alert("Wrong username");
        }
        else if(pass!==userlogdata1[i].password){
          alert("wrong password");
        }
        
      }  
    }
    // function for taking the value from input boxes
    const userNameHandler=(e)=>{
      setuserLogname(e.target.value)
    }
    const passwHandler=(e)=>{
        setPass(e.target.value)
    }
    // function for back button
    const backbuttonHandler=()=>{
      navigate('/');
    }
  return (
    <div>
<form onSubmit={submitHandler}>
  <div class="container">
    <h2>Login Here</h2>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" onChange={userNameHandler} required/>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" onChange={passwHandler} required/>    
    <button className='button' type="submit">Login</button>
    <button className='button' onClick={backbuttonHandler} >Back</button>
  </div>
</form>
    </div>
  )
}

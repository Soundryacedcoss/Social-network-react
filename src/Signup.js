import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  // states
    const[logarr,setLogarr]=useState([])
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState('')
    const[number,setNumber]=useState('')
    const[city,setCity]=useState('')
    const[contry,setContry]=useState('')
    const[pincode,setPincode]=useState('')
    // functions for taking the value from input boxes
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const usernameHandler=(e)=>{
        setUsername(e.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }
    const numberHandler=(e)=>{
        setNumber(e.target.value)
    }
    const cityHandler=(e)=>{
        setCity(e.target.value)
    }
    const contryHandler=(e)=>{
        setContry(e.target.value)
    }
    const pincodeHandler=(e)=>{
        setPincode(e.target.value)
    }
    const RegisterHandler=(event)=>{
        event.preventDefault();
        // form validation
        var atposition=email.indexOf("@");
        var dotposition=email.lastIndexOf(".");
        if(name===""){
          alert("name should not be empty")
          document.form.name.focus();
        }
        else if(!isNaN(name)){
          alert("Name Should not be integer");
          document.form.name.focus();
        }
        else if(email===""){
          alert("Plese enter your email");
          document.form.email.focus();
        }
        else if ((atposition<1 || email.lastIndexOf(".")<atposition+2 || dotposition+2>=email.length)) {
          alert("please enter valid email");
          document.form.email.focus();
        }
        else if(username===""){
          alert("Please enter your username");
          document.form.username.focus();
        }
        else if(password===""){
          alert("please enter password");
          document.form.psw.focus();
        }
        else if(number===""){
          alert("Enter mobile number")
          document.form.number.focus();
        }
        else if(isNaN(number)){
          alert("number should be integer")
          document.form.number.focus();
       }
       else if(city===""){
        alert("Enter your city")
        document.form.city.focus();
       }
       else if(!isNaN(city)){
        alert("city should not be integer")
        document.form.city.focus();
       }
       else if(contry===""){
        alert("Enter your contry")
        document.form.contry.focus();
       }
       else if(!isNaN(contry)){
        alert("contry should not be integer")
        document.form.contry.focus();
       }else if(pincode===""){
        alert("plese enter pin code")
       }
       else if(pincode.length<=5){
        alert("pin code length should be 6 digits")
       }
       else{
        var obj={
            name:name,
            email:email,
            username:username,
            password:password,
            number:number,
            city:city,
            contry:contry,
            pincode:pincode
        }
        logarr.push(obj)
        let arr= JSON.stringify(logarr)
        // set the values in local storage
        localStorage.setItem("data",arr);
        alert("Created account succesfully Now please login")
      }
    }
  return( 
    <div>
      <form className="form" onSubmit={RegisterHandler} name='form'>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label>Full name</label>
          <input type="text" name="name" placeholder="Full name" onChange={nameHandler}  />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" onChange={emailHandler} />
          <label>UserName</label>
          <input type="text" name="username" placeholder="Enter username" onChange={usernameHandler}/>
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw" onChange={passwordHandler}
            minLength={4} maxLength={20}
          />
          <label>Mobile</label>{" "}
          <input type="text" name="number" placeholder="Enter your number" onChange={numberHandler} maxLength={10} minLength={10} />
          <label >City</label>
          <input type="text" name="city" placeholder="Enter city name" onChange={cityHandler} />
          <label >Contry</label>
          <input type="text" name="contry" placeholder="Enter Contry name" onChange={contryHandler} />
          <label>Pincode</label>
          <input type="Number" placeholder="Enter Pincode"  onChange={pincodeHandler} />
          <p className="Para">
            By creating an account you agree to our{" "}
            <a href="//">Terms & Privacy</a>
          </p>
          <input type="submit" value="Create Account"  />
          <p className="Para">
            Already created <Link to="/Login">Login-Here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

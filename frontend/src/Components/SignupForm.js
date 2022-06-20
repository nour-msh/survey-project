import React, { useState } from 'react';
import axios from 'axios';


const SignupForm=()=> {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleSubmit = (e)=> {
    const data=new FormData
    data.append('email',email)
    data.append('password',password)
    e.preventDefault();
      axios({
        method:"post",
        data,
        url:"http://127.0.0.1:8000/api/register",
      }).then(res=>console.log(res)).catch(error=>console.log(error))
  }
    
    return (
      <div className="container">
        <div  className="myform">
        <h5>Sign Up</h5>
          
            <label>Email:</label>
            <input
              placeholder='Enter Email'
              id="email"
              value={email} onChange={(e)=>setEmail(e.target.value)}
        
            />
            <label>Password:</label>
            <input
              placeholder='Enter Password'
              id='password'
              type="password"
              value={password} onChange={(e)=>setPassword(e.target.value)}
           
            />
            <button className="btn orange" onClick={handleSubmit} >Sign Up</button>
        </div>
      </div>
    )};

export default SignupForm
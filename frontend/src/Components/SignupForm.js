import React, { useState } from 'react';

function SignupForm() {
  
    return (
      <div className="container">
        <form className="myform">
        <h5>Sign Up</h5>
          
            <label>Name:</label>
            <input
              placeholder='Enter Name'
        
            />
            <label>Password:</label>
            <input
              placeholder='Enter Password'
           
            />
            <button className="btn orange" >Sign Up</button>
        </form>
      </div>
    )
};

export default SignupForm
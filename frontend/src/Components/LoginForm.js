import React, { useState } from 'react';

function LoginForm() {
  
    return (
      <div className="container">
        <form className="myform">
          <h5>Log In</h5>
          
            <label>Email:</label>
            <input
              placeholder='Enter Email'
        
            />
            <label>Password:</label>
            <input
              placeholder='Enter Password'
           
            />
            <button className="btn orange">Login</button>
          
        </form>
      </div>
    )
};

export default LoginForm
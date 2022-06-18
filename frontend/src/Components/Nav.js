import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const { Link } = require("react-router-dom");

function Nav() {
  const [showForm, setLoginForm] = useState(false);
  const [openForm, setSignupForm] = useState(false);
  return (
    <>
      <Link to="/" >
      Home
      </Link>
      <Link to="/admin" >
      Admin
      </Link>
      <Link to="/user" >
      User
      </Link>
      <nav className="nav-bar">
        <h2>
          Survey<strong>Maker</strong>
        </h2>
        <div>
          <button
            onClick={() => {
              setLoginForm(!showForm);
            }}
            >
            Login
          </button>
          <button onClick={() => {
              setSignupForm(!openForm);
            }}
            >
            Sign Up</button>
        </div>
      </nav>
      <div>{showForm && <LoginForm/>}</div>
      <div>{openForm && <SignupForm/>}</div>
    </>
  );
}


export default Nav
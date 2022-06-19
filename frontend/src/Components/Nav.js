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
          SurveyMaker
        </h2>
        <div>
          <button className="btn orange"
            onClick={() => {
              setLoginForm(!showForm);
            }}
            >
            Login
          </button>
          <button className="btn yellow" onClick={() => {
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
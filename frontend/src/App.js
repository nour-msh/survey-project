import "./App.css";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
// import SignupForm from "./Components/SignupForm";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </Router>
      {/* <SignupForm/> */}
      
      {/* <About/> */}
    </>
  )
}

export default App

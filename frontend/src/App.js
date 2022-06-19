import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
// import Element from './Components/Element';
// import Dropdown from './Components/Dropdown';
// import DropdownElement from './Components/DropdownElement';
// import DropdownButton from "./Components/DropdownButton";

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
        {/* <Dropdown/>
        <Element/>
        <DropdownButton/>
        <DropdownElement/> */}
      
      {/* <About/> */}
    </>
  )
}

export default App

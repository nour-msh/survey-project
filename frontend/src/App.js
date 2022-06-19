import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import User from "./Pages/User";

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
      {/* <About/> */}
    </>
  );
}

export default App;

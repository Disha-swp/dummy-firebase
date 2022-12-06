import Employee from "./components/EmployeeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certify from "./components/CertificateDetails";
import React, { useState, useEffect, useRef } from "react";
import Home from "./Home";
import Callapi from "./components/Callapi";
import { Button } from "react-bootstrap";

import Update from "./Compo/Update";
import Create from "./Compo/Create";
import Read from "./Compo/Read";
import Delete from "./Compo/Delete";
import NavBar from "./Pages/NavBar";
const App = () => {
  const [theme, setTheme] = useState("light");
  const [hide, setHide] = useState(false);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }; 

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  return (
    <Router>
      {/* <div className="App"> */}
      <div className={`App ${theme}`}>
        <NavBar/>
        <div className="main container-fluid p-0 ">
          <div className="container align-items-center text-center text-sm-start p-3">
            <button
              className="btn btn-secondary align-items-center float-end "
              onClick={toggleTheme}
            >
              Toggle
            </button>
            <Routes>
              {/* <Route exact path = '/' element={<Create/>}/> */}

              {/* <Route exact path = '/read' element={<Read/>}/> */}

              {/* <Router>
      <Routes> */}
              <Route exact path="/" element={<Home />} />
              {/* </Route> */}
              <Route path="/empdetails" element={<Employee />} />
              <Route path="/certificate" element={<Certify />} />
              {/* <Callapi /> */}
              {/* </Routes>
      </Router> */}

              {/* <Route exact path = '/update' element ={<Update/>}/> */}
              {/* <Route exact path = '/delete' element={<Delete/>}/> */}
            </Routes>
          </div>
        </div>
        
      </div>
    </Router>
  );
};
export default App;

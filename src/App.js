import Employee from "./components/EmployeeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certify from "./components/CertificateDetails";
import React, { useState} from "react";
import Home from "./Home";
// eslint-disable-next-line
import Callapi from "./components/Callapi";
// eslint-disable-next-line
import { Button } from "react-bootstrap";
// eslint-disable-next-line
import Update from "./Compo/Update";
// eslint-disable-next-line
import Create from "./Compo/Create";
// eslint-disable-next-line
import Read from "./Compo/Read";
// eslint-disable-next-line
import Delete from "./Compo/Delete";
// eslint-disable-next-line
import NavBar from "./Pages/NavBar";
import Signup from "./components/Signup";
const App = () => {
  const [theme, setTheme] = useState("light");
  // eslint-disable-next-line
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
      <div className={`App ${theme}`}>
        <div className="wrapper container-fluid p-0  ">
          <div className="container align-items-center text-center text-sm-start p-3 mt-3">
            <button
              className="btn btn-secondary align-items-center float-end mt-5 "
              onClick={toggleTheme}
            >
              Toggle
            </button>
            <Routes>
              {/* <Route exact path = '/' element={<Create/>}/> */}

              {/* <Route exact path = '/read' element={<Read/>}/> */}

              {/* <Router>
      <Routes> */}
              <Route path="/dummy-firebase" exact={true} element={<Signup />} />
              <Route path="/" exact={true} element={<Home />} />
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
        <div className=" d-flex p-0 flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
        style={{width:"100%",bottom:"0",overflow:"hidden"}}>
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default App;

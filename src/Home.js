import Employee from "./components/EmployeeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Certify from "./components/CertificateDetails";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import SwiperComponent from "./Pages/SwiperComponent";
import OurTechExpertise from "./Pages/OurTechExpertise";
import Cards from "./Pages/Cards";
import Content2 from "./Pages/Content2";

const Home = () => {
  //   const [hide,setHide] = useState(false);
  return (
    <div className="container-fluid p-0 ">
      <div className="container align-items-center text-center text-sm-start p-3">
        <div className="row">
          <div className="col-12 col-lg-8 "><SwiperComponent /></div>
          <div className="col-12 col-lg-4 text-md-end text-center pt-5">
            <div>for image</div>
          </div>
        </div>
        {/* <button className="learn-more mt-5">Learn More</button> */}
        <div className="text-sm-start text-center mt-4">
          Mutating the world
          <br />
          by implementing immutability
        </div>
        <div
          className="fs-5 text-sm-start text-center mt-5 para"
          style={{ color: "#cdcdcd" }}
        >
          Many believe that security and transparency can not co-exist, until
          blockchain arrived. Blockchain is a mechanism for storing data in a
          way that makes system changes, hacking and cheating difficult to
          near-impossible.
        </div>
        <div><Cards /></div>
        <div className="py-5">
          {/* <button className="title rounded-pill py-3">
            Blockchain Offerings
          </button> */}
          {/* <BlockchainOfferings /> */}
        </div>
        <div>
          {/* <button className=" title py-3">
            Our Tech Expertise
          </button> */}
          <OurTechExpertise />
        </div>
        <div className="pb-5">
          {/* <button className=" title pb-3">
            Why Choose Squbix?
          </button> */}
          <Content2/>
        </div>
        <div style={{ background: " rgba(255, 255, 255, 0.7)" }}>
          {/* <Newsletter /> */}
        </div>
      </div>
      {/* <div className="m-5">
        <Link to="/empdetails">
          <Button className="">Employee Details</Button>
        </Link>
      </div>
      <div className="p-5">
        <Link to="/certificate">
          <Button className="">Certificate Details</Button>
        </Link>
      </div> */}
    </div>
  );
};
export default Home;

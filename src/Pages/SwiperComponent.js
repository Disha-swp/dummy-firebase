import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "../CSS/Swiper.css"
// import "swiper/css/pagination";
// import { Autoplay } from "swiper";
// eslint-disable-next-line
// import { Pagination } from "swiper";
import { Link } from "react-router-dom";
// import dots from "../Assets/Images/Framedot.svg";
// import dots2 from "../Assets/Images/Framedot1.svg";
// import dots3 from "../Assets/Images/Framedot2.svg";

export default function SwiperComponent() {
  const [isDisplayed, setIsDisplayed] = useState("first");
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDisplayed === "first") {
        setIsDisplayed("second");
      } else if (isDisplayed === "second") {
        setIsDisplayed("third");
      } else {
        setIsDisplayed("first");
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isDisplayed]);

  return (
    <>
      <div className="wrapper">
        {isDisplayed === "first" && (
          <div className="first" data-aos="fade" data-aos-easing="ease-in-sine">
            <div className="remove-item row text-sm-start text-center">
              <div className="card">
                <div className="card-head fs-1 fw-bold">
                  JavaScript
                </div>
                <div className="card-text fs-5 mt-3 ">
                JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web
                </div>
              </div>
            </div>

            <Link to="/aboutus">
              <button className=" btn btn-secondary mt-5">Learn More</button>
            </Link>
            <div>
              
            </div>
          </div>
        )}
        {isDisplayed === "second" && (
          <div
            className="second"
            data-aos="fade"
            data-aos-easing="ease-in-sine"
          >
            <div className="row text-sm-start text-center">
              <div className="card">
                <div className="card-head fs-1 fw-bold">
                  What React does?
                </div>
                <div className="card-text fs-5 mt-3">
                React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                </div>
              </div>
            </div>

            <Link to="/smartcontractdevelopment">
              <button className="btn btn-secondary mt-5">Learn More</button>
            </Link>
            <div>
              
            </div>
          </div>
        )}
        {isDisplayed === "third" && (
          <div className="third" data-aos="fade" data-aos-easing="ease-in-sine">
            <div className="row text-sm-start text-center">
              <div className="card">
                <div className="card-head fs-1 fw-bold">
                  Firebase
                </div>
                <div className="card-text fs-5 mt-3">
                Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server
                </div>
              </div>
            </div>
            <Link to="/trainingandedu">
              <button className="btn btn-secondary mt-5">Learn More</button>
            </Link>
            <div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

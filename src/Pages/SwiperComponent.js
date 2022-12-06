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
                  Products | Solutions | Services
                </div>
                <div className="card-text fs-5 mt-3 ">
                  A pathway of calibers suffused with expertise in Blockchain
                  Development, cloud services, testing automation,
                  Web-Development, Mobile Development, and many more. The
                  penultimate objective is to bring ingenious solutions to solve
                  business problems.
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
                  Blockchain Consultant
                </div>
                <div className="card-text fs-5 mt-3">
                  The unfathomable potential of Blockchain is sheerly
                  indomitable which makes it the pinnacle of current world
                  innovation. Our team at Squbix has had its establishments in
                  the domains of wallet development, CBDC, Core Blockchain
                  Development etc.
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
                  Training & Education
                </div>
                <div className="card-text fs-5 mt-3">
                  We provide industry standard training on BLOCKCHAIN and AI.
                  Also get a chance to learn development of real-world products
                  such as wallet, coin, exchange platform, applications under
                  the guidnace of our highly experienced developers.
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

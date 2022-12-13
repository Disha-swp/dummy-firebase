import React, { useEffect, useState } from "react";
import sc from "../Assets/smart_contract.svg";
import sc2 from "../Assets/smart_contract_2.svg";
import defi from "../Assets/defi.svg";
import defi2 from "../Assets/Defi_2.svg";
import ssid2 from "../Assets/SSID_2.svg";
import ssid from "../Assets/SSID.svg";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import "../CSS/Cards.css";
function Cards() {
  const [over1, setOver1] = useState(null);
  const [paraStyle1, setParaStyle1] = useState({
    opacity: "",
    transition: "1s",
    height: "147px",
  });
  const [paraStyle2, setParaStyle2] = useState({
    opacity: "",
    transition: "1s",
    height: "147px",
  });
  const [paraStyle3, setParaStyle3] = useState({
    opacity: "",
    transition: "1s",
    height: "147px",
  });
  useEffect(() => {
    if (over1 === "card1") {
      setParaStyle1((paraStyle1) => ({ ...paraStyle1, opacity: "1" }));
    } else if (over1 === "card2") {
      setParaStyle2((paraStyle2) => ({ ...paraStyle2, opacity: "1" }));
    } else if (over1 === "card3") {
      setParaStyle3((paraStyle3) => ({ ...paraStyle3, opacity: "1" }));
    } else {
      setParaStyle1({ ...paraStyle1, opacity: "0.5" });
      setParaStyle2({ ...paraStyle2, opacity: "0.5" });
      setParaStyle3({ ...paraStyle3, opacity: "0.5" });
    }
    // eslint-disable-next-line
  }, [over1]);

  return (
    <div className="row">
      <div
        data-aos="flip-left"
        data-aos-delay="200"
        className="col-md-12 col-lg-4"
      >
        <div
          className=" col card card-style rounded-4 text-center mt-5 pb-4"
          style={{ height: "450px" }}
          onMouseOver={() => setOver1("card1")}
          onMouseOut={() => setOver1(null)}
        >
          <div className=" py-5">
            {/* <img
              src={over1 === "card-style" ? ssid2 : ssid}
              style={{ height: "108px", width: "126px" }}
              alt="icon"
            /> */}
            <CurrencyRupeeRoundedIcon
              style={{ height: "120px", width: "126px" }}
            />
          </div>
          <div className="card-body p-0">
            <h5 className="card-title fw-bold">Declarative</h5>
            <p className="card-text p-4 " style={paraStyle1}>
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-delay="400"
        className="col-md-12 col-lg-4"
      >
        <div
          className=" col card card-style rounded-4  text-center mt-5 pb-4"
          style={{ height: "450px" }}
          onMouseOver={() => setOver1("card2")}
          onMouseOut={() => setOver1(null)}
        >
          <div className="py-5">
            {/* <img src={over1 === "card2" ? defi2 : defi} alt="icon" /> */}
            <AccessTimeRoundedIcon
              style={{ height: "120px", width: "126px" }}
            />
          </div>
          <div className="card-body p-0">
            <h5 className="card-title fw-bold">Component-Based</h5>
            <p className="card-text p-4" style={paraStyle2}>
            Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-delay="600"
        className="col-md-12 col-lg-4"
      >
        <div
          className=" col card card-style rounded-4  text-center mt-5 pb-4"
          style={{ height: "450px" }}
          onMouseOver={() => setOver1("card3")}
          onMouseOut={() => setOver1(null)}
        >
          <div className="py-5">
            {/* <img src={over1 === "card3" ? sc2 : sc} alt="icon" /> */}
            <TaskRoundedIcon style={{ height: "120px", width: "126px" }} />
          </div>
          <div className="card-body p-0">
            <h5 className="card-title fw-bold">Learn Once, Write Anywhere</h5>
            <p className="card-text p-4" style={paraStyle3}>
            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <p className="para fs-5 mt-5">
         
        </p>
      </div> */}
    </div>
  );
}

export default Cards;

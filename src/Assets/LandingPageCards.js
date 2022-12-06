import React, { useEffect, useState } from "react";
import sc from "../Assets/Images/smart_contract.svg";
import sc2 from "../Assets/Images/smart_contract_2.svg";
import defi from "../Assets/Images/defi.svg";
import defi2 from "../Assets/Images/Defi_2.svg";
import ssid2 from "../Assets/Images/SSID_2.svg";
import ssid from "../Assets/Images/SSID.svg";
function LandingPageCards() {
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
      <div className="col-md-12 col-lg-4">
        <div
          className=" col card rounded-4 cardgroup text-center mt-5 pb-4"
          style={{ height: "450px" }}
          onMouseOver={() => setOver1("card1")}
          onMouseOut={() => setOver1(null)}
        >
          <div className=" py-5">
            <img
              src={over1 === "card1" ? ssid2 : ssid}
              style={{ height: "108px", width: "126px" }}
              alt="icon"
            />
          </div>
          <div className="card-body p-0">
            <h5 className="card-title fw-bold">SSID</h5>
            <p className="card-text p-4 " style={paraStyle1}>
              Self Sovereign Identity is the definition of the new tomorrow
              where you get to choose the data you want to share, here at Squbix
              WE ARE BUILDING THAT FUTURE
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <div
          className=" col card rounded-4 cardgroup text-center mt-5 pb-4"
          style={{ height: "450px" }}
          onMouseOver={() => setOver1("card2")}
          onMouseOut={() => setOver1(null)}
        >
          <div className="py-5">
            <img src={over1 === "card2" ? defi2 : defi} alt="icon" />
          </div>
          <div className="card-body p-0">
            <h5 className="card-title fw-bold">DeFi</h5>
            <p className="card-text p-4" style={paraStyle2}>
              Decentralised finance is the pinnacle of revolution capacitated to
              the possibilities of converting money into a dispersed asset, WE
              ARE STRIVING TO BUILD PROGRAMMABLE MONEY FOR THE POSTERITY.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <div
          className=" col card rounded-4 cardgroup text-center mt-5 pb-4"
          style={{ height: "450px" }}
          onMouseOver={() => setOver1("card3")}
          onMouseOut={() => setOver1(null)}
        >
          <div className="py-5">
            <img src={over1 === "card3" ? sc2 : sc} alt="icon" />
          </div>
          <div className="card-body p-0">
            <h5 className="card-title fw-bold">Smart Contracts</h5>
            <p className="card-text p-4" style={paraStyle3}>
              Building ideologies and implementing them via automation is an
              ineludible reality with the extent of technology attainable,
              CONTACT US TO BUILD YOU SMART CONTRACT TODAY.
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

export default LandingPageCards;

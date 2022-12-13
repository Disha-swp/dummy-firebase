import React, { useEffect, useState } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import WeekendRoundedIcon from "@mui/icons-material/WeekendRounded";
import SportsCricketRoundedIcon from "@mui/icons-material/SportsCricketRounded";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
// import hyperledger2 from "../Assets/Images/hyperledger2.svg";

function OurTechExpertise() {
  const [over, setOver] = useState(null);

  const [title, setTitle] = useState({
    opacity: "0",
    transform: "translate3d(0, -70px, 0)",
    transition: "0.5s all ease-in-out",
  });
  // eslint-disable-next-line
  const [preTitle, setPreTitle] = useState({
    opacity: "0",
    transform: "translate3d(0, -70px, 0)",
    transition: "0.5s all ease-in-out",
  });
  const [desc, setDesc] = useState({
    opacity: 0,
    transform: " translate3d(0, -130px, 0)",
    transition: "0.6s all ease-in-out",
  });
  // eslint-disable-next-line
  const [preDesc, setPreDesc] = useState({
    color: "rgba(255, 255, 255, 0.7)",
    opacity: 0,
    transform: " translate3d(0, -130px, 0)",
    transition: "0.6s all ease-in-out",
  });
  const [image, setImage] = useState({
    transition: "0.5s all ease-in-out",
    height: "200px",
    width: "200px",
  });
  const [visitButton, setVisitButton] = useState({
    opacity: 0,
    transform: " translate3d(0, -200px, 0)",
    transition: "1s all ease-in-out",
  });
  // eslint-disable-next-line
  const [preVisitButton, setPreVisitButton] = useState({
    opacity: 0,
    transform: " translate3d(0, -200px, 0)",
    transition: "1s all ease-in-out",
  });
  useEffect(() => {
    if (over) {
      setImage({
        ...image,
        transform: "scale(0.5) translate3d(0, -80px, 0)",
        // fill: "white",
      });
      setDesc({
        ...desc,
        opacity: "1",
        transform: "translate3d(0, -70px, 0)",
      });
      setVisitButton({
        ...visitButton,
        opacity: "1",
        transform: "translate3d(0, -70px, 0)",
        backgroundColor: "#00FFC6",
        color: "black",
      });
      setTitle({
        ...title,
        opacity: "1",
      });
    } else {
      setDesc({
        ...desc,
        opacity: "0",
        transform: "translate3d(0, -130px, 0)",
      });
      setVisitButton({
        ...visitButton,
        opacity: "0",
        transform: "translate3d(0, -200px, 0)",
      });
      setTitle({
        ...title,
        opacity: "0",
      });
      setImage({
        ...image,
        transform: "translate3d(0, 0, 0)",
      });
    }
    // eslint-disable-next-line
  }, [over]);
  return (
    <div className="row" data-aos="fade-up" style={{marginTop:"-80px",marginBottom:"-90px"}}>
      <div
        data-aos="flip-right"
        data-aos-delay="100"
        className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center justify-content-center"
        onMouseOver={() => setOver("corda")}
        onMouseOut={() => setOver(null)}
      >
        <div className="mt-5 mt-md-0">
          <SecurityIcon
            style={
              over === "corda"
                ? image
                : {
                    transition: "0.5s all ease-in-out",
                    height: "200px",
                    width: "200px",
                  }
            }
          />
          <div
            className="fs-3 fw-bold"
            style={over === "corda" ? title : preTitle}
          >
            {" "}
            Firebase
          </div>
          <div className="p-2" style={over === "corda" ? desc : preDesc}>
            {" "}
             It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server
          </div>
          <button
            className="btn p-2 px-4 my-2 rounded-3 fw-bolder"
            style={over === "corda" ? visitButton : preVisitButton}
            onClick={() => window.open("https://www.corda.net/")}
          >
            Visit Site
          </button>
        </div>
      </div>
      <div
        data-aos="flip-right"
        data-aos-delay="200"
        className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center justify-content-center"
        onMouseOver={() => setOver("polkadot")}
        onMouseOut={() => setOver(null)}
      >
        <div className="">
          <WeekendRoundedIcon
            style={
              over === "polkadot"
                ? image
                : {
                    transition: "0.5s all ease-in-out",
                    height: "200px",
                    width: "200px",
                  }
            }
          />
          <div
            className="fs-3 fw-bold"
            style={over === "polkadot" ? title : preTitle}
          >
            {" "}
            Declarative
          </div>
          <div className="p-2" style={over === "polkadot" ? desc : preDesc}>
            {" "}
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
          </div>
          <button
            className="btn p-2 px-4 my-2 rounded-3 fw-bolder"
            style={over === "polkadot" ? visitButton : preVisitButton}
            onClick={() => window.open("https://polkadot.network/")}
          >
            Visit Site
          </button>
        </div>
      </div>
      <div
      
      data-aos="flip-right"
      data-aos-delay="300"
        className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center justify-content-center "
        onMouseOver={() => setOver("ledger")}
        onMouseOut={() => setOver(null)}
      >
        <div className="" style={{marginTop:"-20px"}}>
          <SportsCricketRoundedIcon
            style={
              over === "ledger"
                ? image
                : {
                    transition: "0.5s all ease-in-out",
                    height: "200px",
                    width: "200px",
                  }
            }
          />
          <div
            className="fs-3 fw-bold"
            style={over === "ledger" ? title : preTitle}
          >
            {" "}
            Component-Based
          </div>
          <div className="p-2" style={over === "ledger" ? desc : preDesc}>
            {" "}
            Build encapsulated components that manage their own state, then compose them to make complex UIs.
          </div>
          <button
            className="btn p-2 px-4 my-2 rounded-3 fw-bolder"
            style={over === "ledger" ? visitButton : preVisitButton}
            onClick={() => window.open("https://www.hyperledger.org/")}
          >
            Visit Site
          </button>
        </div>
      </div>
      <div
        
        data-aos="flip-right"
        data-aos-delay="400"
        className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center justify-content-center mb-3"
        onMouseOver={() => setOver("ethereum")}
        onMouseOut={() => setOver(null)}
      >
        <div className="">
          <QueueMusicRoundedIcon
            style={
              over === "ethereum"
                ? image
                : {
                    transition: "0.5s all ease-in-out",
                    height: "200px",
                    width: "200px",
                  }
            }
          />
          <div
            className="fs-3 fw-bold"
            style={over === "ethereum" ? title : preTitle}
          >
            Learn Once, Write Anywhere
          </div>
          <div className="p-2" style={over === "ethereum" ? desc : preDesc}>
          We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
          </div>
          <button
            className="btn p-2 px-4 my-2 rounded-3 fw-bolder"
            style={over === "ethereum" ? visitButton : preVisitButton}
            onClick={() => window.open("https://ethereum.org/en/")}
          >
            Visit Site
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurTechExpertise;

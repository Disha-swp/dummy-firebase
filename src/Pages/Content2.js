import React, { useEffect } from "react";
import corda from "../Assets/corda.svg";
import polkadot from "../Assets/polkadot.svg";
import hyperledger from "../Assets/hyperledger.svg";
import ethereum from "../Assets/ethereum.svg";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BusinessIcon from "@mui/icons-material/Business";
import Aos from "aos";

function Content2() {
  useEffect(() => {
    Aos.init();
  }, []);

  const paraColor = { color: "#808080" };
  return (
    <div className="row mb-5">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center "
      >
        <div>
          {/* <img src={GroupsIcon} alt="ledger" /> */}
          <Diversity3Icon style={{ height: "120px", width: "120px" }} />

          <div className="fs-3 fw-bold"> Build</div>
          <div className="p-2 " style={paraColor}>
            {" "}
            Build powerful apps. Spin up your backend without managing servers.
            Effortlessly scale to support millions of users with Firebase
            databases, machine learning infrastructure, hosting and storage
            solutions, and Cloud Functions.
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center "
      >
        <div>
          {/* <img src={polkadot} alt="ledger" style={imgsmall} /> */}
          <SchoolIcon style={{ height: "120px", width: "120px" }} />
          <div className="fs-3 fw-bold"> Release & Monitor</div>
          <div className="p-2" style={paraColor}>
            {" "}
            Improve app quality in less time with less effort. Simplify testing,
            triaging, and troubleshooting. Carefully roll out features and
            monitor adoption. Pinpoint, prioritize, and fix stability and
            performance issues early.
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center"
      >
        <div>
          {/* <img src={hyperledger} alt="ledger" style={imgsmall} /> */}
          <LibraryBooksIcon style={{ height: "120px", width: "120px" }} />
          <div className="fs-3 fw-bold"> Engage</div>
          <div className="p-2" style={paraColor}>
            {" "}
            Boost user engagement with rich analytics, A/B testing, and
            messaging campaigns. Understand your users to better support and
            retain them. Run experiments to test ideas and uncover new insights.
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="col-12 col-sm-6 col-lg-3 d-flex text-center align-items-center "
      >
        <div>
          {/* <img src={ethereum} alt="ethereum" style={imgsmall} /> */}
          <BusinessIcon style={{ height: "120px", width: "120px" }} />
          <div className="fs-3 fw-bold">Guides</div>
          <div className="p-2" style={paraColor}>
            Descriptive how-to content with both high-level introductions and
            step-by-step workflows for using Firebase products. Find Firebase
            guides under the Fundamentals, Build, Release & Monitor, and Engage
            tabs at the top of the page.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content2;

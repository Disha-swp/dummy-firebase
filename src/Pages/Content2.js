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

          <div className="fs-3 fw-bold">
            {" "}
            Corda
          </div>
          <div className="p-2 " style={paraColor}>
            {" "}
            A modular open-source framework for developing distributed ledger
            systems with high levels of secrecy, flexibility, robustness, and
            scalability.
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
          <div className="fs-3 fw-bold">
            {" "}
            Polkadot
          </div>
          <div className="p-2" style={paraColor}>
            {" "}
            Network of blockchains that provides seamless communication across
            blockchains and unrivalled security.
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
          <div className="fs-3 fw-bold">
            {" "}
            Hyperledger
          </div>
          <div className="p-2" style={paraColor}>
            {" "}
            A modular open-source framework for developing distributed ledger
            systems with high levels of secrecy, flexibility, robustness, and
            scalability.
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
          <div className="fs-3 fw-bold">
            Ethereum
          </div>
          <div className="p-2" style={paraColor}>
            A decentralised blockchain framework that establishes a peer-to-peer
            community for securely implementing and authenticating code, termed
            as smart contracts.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content2;

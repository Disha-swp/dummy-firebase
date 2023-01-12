import { useUserAuth } from "../context/UserAuthContext";
import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const { signOutt } = useUserAuth();
  const handleSignOutt = async (e) => {
    e.preventDefault();
    try {
      await signOutt();
    } catch (err) {
      alert(err.message);
      // setError(err.message);
    }
  };
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-light"
      style={{ width: "100%" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Squbix
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificate">
              Certificate Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/empdetails">
                Employee Details 
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                onClick={(e) => handleSignOutt(e)}
                className="btn btn-primary"
              >
                Sign Out
              </button>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

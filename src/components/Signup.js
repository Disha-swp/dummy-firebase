import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
function Signup() {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = () =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history("/");
        const user = userCredential.user;
        console.log(user);
        alert("Successfully created an account");
      })
      .catch((error) => {
        // console.log(JSON.stringify(auth, null, 2));
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

  const signIn = () =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        history("/");
        // alert("already registered");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        errorCode === "auth/wrong-password"
          ? alert(" wrong password")
          : errorCode === "auth/invalid-email"
          ? alert("fill form")
          : errorCode === "auth/internal-error"
          ? alert("enter password")
          : alert("not a valid user");

        // alert(errorCode);
      });

  return (
    <div>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample "
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal my-3 me-3">Sign in with</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label className="form-label">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  autoComplete="on"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <label className="form-label">Password</label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem" }}
                  onClick={() => signIn()}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => signUp()}
                    className=" btn btn-sm btn-danger m-2"
                  >
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

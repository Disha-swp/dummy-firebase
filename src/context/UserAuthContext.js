import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  let history = useNavigate();
  const [user, setUser] = useState("");
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history("/");
        const user = userCredential.user;
        console.log(user);
        alert("Successfully created an account");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });

  const signIn = (email, password) =>
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
  const signOutt = () =>
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
        alert("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider value={{ user, signUp, signIn,signOutt }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

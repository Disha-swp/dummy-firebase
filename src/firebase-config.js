// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB7XrACCPbQWk3CNNbexhOIXIU6g0EV4kI",
//   authDomain: "squbix-digital-service.firebaseapp.com",
//   projectId: "squbix-digital-service",
//   storageBucket: "squbix-digital-service.appspot.com",
//   messagingSenderId: "1010662322297",
//   appId: "1:1010662322297:web:3535967ac3bc763e4c64a8",
//   measurementId: "G-XH54SELN10"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//  export const db = getFirestore(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1z87_OdKiX-yzcph8HmtewbJ8sQwefzA",
  authDomain: "dummy-7333d.firebaseapp.com",
  databaseURL: "https://dummy-7333d-default-rtdb.firebaseio.com",
  projectId: "dummy-7333d",
  storageBucket: "dummy-7333d.appspot.com",
  messagingSenderId: "117047256173",
  appId: "1:117047256173:web:ab123ec804e37a0cf20b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export{db,auth}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
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
export const db = getFirestore(app);

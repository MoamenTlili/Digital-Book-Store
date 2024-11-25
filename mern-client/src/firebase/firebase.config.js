// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeB4hktDZBwtSYgynhIIVw2si_Hhlp_BU",
  authDomain: "mern-bookinventory.firebaseapp.com",
  projectId: "mern-bookinventory",
  storageBucket: "mern-bookinventory.appspot.com",
  messagingSenderId: "168793865424",
  appId: "1:168793865424:web:3809fe1ac2a0d2b710b2d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6x7GkEhBmH_Ss8fXfOt1i8djOx2cniUw",
  authDomain: "desgin-agency.firebaseapp.com",
  projectId: "desgin-agency",
  storageBucket: "desgin-agency.appspot.com",
  messagingSenderId: "308372932562",
  appId: "1:308372932562:web:7d323847188471961aaa0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app) 
export default auth
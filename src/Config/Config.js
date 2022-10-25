// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxhvtZdc0Uo2vCIgzF2g7E862jJjF9CUM",
  authDomain: "skillup-9b835.firebaseapp.com",
  projectId: "skillup-9b835",
  storageBucket: "skillup-9b835.appspot.com",
  messagingSenderId: "669588031245",
  appId: "1:669588031245:web:efce707641824539f11244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
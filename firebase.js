// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz6Jsl7m-_cPhwq78BApdBfZO7IUx43xU",
  authDomain: "cityscape-5ddcf.firebaseapp.com",
  projectId: "cityscape-5ddcf",
  storageBucket: "cityscape-5ddcf.appspot.com",
  messagingSenderId: "259997002188",
  appId: "1:259997002188:web:367322f59f5d2297bf9569",
  measurementId: "G-7QGDS2GEJV"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
//const analytics = getAnalytics(FIREBASE_APP);
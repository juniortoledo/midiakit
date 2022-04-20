import firebase from "firebase/app"; // rollup bundle issue with ESM import
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGGJcrN4gYGst6a1KmzBZkRgcXWAoXo_A",
  authDomain: "diario-midiakit.firebaseapp.com",
  projectId: "diario-midiakit",
  storageBucket: "diario-midiakit.appspot.com",
  messagingSenderId: "112436513501",
  appId: "1:112436513501:web:a5416a56429d420495a934",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAbowZDGw2RR4RSA81yIa-hmgV8t5mEyuU",
  authDomain: "cine-sync-c1d7a.firebaseapp.com",
  projectId: "cine-sync-c1d7a",
  storageBucket: "cine-sync-c1d7a.appspot.com",
  messagingSenderId: "887254496438",
  appId: "1:887254496438:web:6e3ff12a6e7e192da2a217",
  measurementId: "G-XBNT672VJ2",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get the Auth instance for the initialized Firebase app
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
};

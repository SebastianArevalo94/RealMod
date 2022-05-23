// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQmVoLc4Pkew2yBqKXKO26UBw8RoqhA9Q",
  authDomain: "realmod-132b7.firebaseapp.com",
  projectId: "realmod-132b7",
  storageBucket: "realmod-132b7.appspot.com",
  messagingSenderId: "366487962207",
  appId: "1:366487962207:web:cd2d416eb6d90e153711ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, db, auth, facebook };


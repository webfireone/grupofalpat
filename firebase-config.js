// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAisXGZC_EdxGooYtcnXjIPDBifn4gOnw8",
  authDomain: "grupofalpat-80428.firebaseapp.com",
  projectId: "grupofalpat-80428",
  storageBucket: "grupofalpat-80428.firebasestorage.app",
  messagingSenderId: "730249631470",
  appId: "1:730249631470:web:32739ab9123cf53f6a05ff",
  measurementId: "G-LQM9S9207K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
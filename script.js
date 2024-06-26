// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUSTAj7xQHpf7yo86Tp0mJMrbDMeJdD5E",
  authDomain: "plated-field-326513.firebaseapp.com",
  projectId: "plated-field-326513",
  storageBucket: "plated-field-326513.appspot.com",
  messagingSenderId: "481959627089",
  appId: "1:481959627089:web:d728ca4ff22281b772eb70",
  measurementId: "G-VZ116YDQD4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

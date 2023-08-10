// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYnrug9qm3f_L6Ce_sR4e-_EIsSRe2BQY",
  authDomain: "tswai-hotel.firebaseapp.com",
  projectId: "tswai-hotel",
  storageBucket: "tswai-hotel.appspot.com",
  messagingSenderId: "1038676726682",
  appId: "1:1038676726682:web:ac735be0ba0f745e1de023",
  measurementId: "G-DCS5H58EML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
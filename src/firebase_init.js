// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpvBJM0GTfBQBAdYg-hA5UVTJXKjW2Lk",
  authDomain: "medicare2-3248e.firebaseapp.com",
  projectId: "medicare2-3248e",
  storageBucket: "medicare2-3248e.appspot.com",
  messagingSenderId: "1035505968605",
  appId: "1:1035505968605:web:34f5528fb1e7e712538234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth


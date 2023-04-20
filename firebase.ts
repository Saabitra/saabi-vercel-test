import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app"s Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi-36tTaRfn6pHldgpznqtV3I-NuXrZk8",
  authDomain: "saabi-2.firebaseapp.com",
  projectId: "saabi-2",
  storageBucket: "saabi-2.appspot.com",
  messagingSenderId: "168732431975",
  appId: "1:168732431975:web:d41fcf9bd6bf75102866c2"
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
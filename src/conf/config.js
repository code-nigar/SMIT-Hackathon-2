// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7PQ35mcK5ddJH7ZPZtsF8N8LrcRCYBUc",
  authDomain: "saylani-store-350f2.firebaseapp.com",
  projectId: "saylani-store-350f2",
  storageBucket: "saylani-store-350f2.appspot.com",
  messagingSenderId: "898239959610",
  appId: "1:898239959610:web:0889e5b8c6fb3140c31b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {firebaseConfig, app, db};
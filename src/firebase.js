// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAeMdMKsug9IkHoOn4lDIt18U1Ixwh0N5Q",
  authDomain: "mujhe-books-do.firebaseapp.com",
  projectId: "mujhe-books-do",
  storageBucket: "mujhe-books-do.appspot.com",
  messagingSenderId: "507232944863",
  appId: "1:507232944863:web:758e9cc9fb572912049f6a",
  measurementId: "G-FN5KPFQL1J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { db, auth, app };

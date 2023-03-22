
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF-3NF5mVMdUzWDsFy7gyme3BBZWIMeB0",
  authDomain: "journalapp-react-32398.firebaseapp.com",
  projectId: "journalapp-react-32398",
  storageBucket: "journalapp-react-32398.appspot.com",
  messagingSenderId: "1089699235828",
  appId: "1:1089699235828:web:8e3c316227b275da6e9ba1"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore( firebaseDB );
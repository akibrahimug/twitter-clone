// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUjYX0HthgtNrFr3YUHGAHNSaR3N8TRN0",
    authDomain: "twitter-clone-a4537.firebaseapp.com",
    projectId: "twitter-clone-a4537",
    storageBucket: "twitter-clone-a4537.appspot.com",
    messagingSenderId: "6140518669",
    appId: "1:6140518669:web:d4178978cf2ba1f9369044",
    measurementId: "G-ZF8MSY2JHL"
  };


// Initialize Firebase

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {db, auth}
// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwMt358q9_Spk3JaQ1QfFJNRxI75ivRog",
    authDomain: "poster-6b2c3.firebaseapp.com",
    projectId: "poster-6b2c3",
    storageBucket: "poster-6b2c3.appspot.com",
    messagingSenderId: "481159791760",
    appId: "1:481159791760:web:f030155b907a24174b0415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

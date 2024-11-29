// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey, authDomain, storageBucket, messagingSenderId, appId } from "../keys";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBykVflTY73XS7V9i4LfbYgeK7t_LkgaOI",
    authDomain: "blog-app-4a650.firebaseapp.com",
    projectId: "blog-app-4a650",
    storageBucket: "blog-app-4a650.firebasestorage.app",
    messagingSenderId: "647173387366",
    appId: "1:647173387366:web:c730c93e20ce37b58d69a7",
    measurementId: "G-8RV5W6Q25L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
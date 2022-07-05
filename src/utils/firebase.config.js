// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_CONFIG.apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_CONFIG.authDomain,
    projectId: process.env.REACT_APP_FIREBASE_CONFIG.projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_CONFIG.storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG.messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_CONFIG.appId,
    measurementId: process.env.REACT_APP_FIREBASE_CONFIG.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const analytics = getAnalytics(app);


export  {app, db}
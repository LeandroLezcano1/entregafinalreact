// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBssiOyH-pVXzdZyIsSZMrtueAKEqG4_Y4",
  authDomain: "shoes-shop-coder-f1f44.firebaseapp.com",
  projectId: "shoes-shop-coder-f1f44",
  storageBucket: "shoes-shop-coder-f1f44.appspot.com",
  messagingSenderId: "554223312673",
  appId: "1:554223312673:web:3bc11707ee25aaa1f6a860",
  measurementId: "G-5BL3S3B53V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
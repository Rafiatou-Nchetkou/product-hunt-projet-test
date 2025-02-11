// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Utiliser 'firebase/auth' pour getAuth
// import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRF7-PZDCOVwiRraIXfj6Sc3OtCbSnuHM",
  authDomain: "product-hunt-9356b.firebaseapp.com",
  projectId: "product-hunt-9356b",
  storageBucket: "product-hunt-9356b.firebasestorage.app",
  messagingSenderId: "568906686806",
  appId: "1:568906686806:web:90ea2dda4b71f66d46f6f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtenez Firestore
const db = getFirestore(app);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

// const storage = getStorage(app);

export { db, auth, googleProvider };
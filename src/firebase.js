// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore'ı import ettik

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5VCHZacIt7uULzNJexC-ppWq6obSdr4",
  authDomain: "furnituredatabase-b83e8.firebaseapp.com",
  projectId: "furnituredatabase-b83e8",
  storageBucket: "furnituredatabase-b83e8.firebasestorage.app",
  messagingSenderId: "1041708294499",
  appId: "1:1041708294499:web:29b8318f137859c11f7356",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Firestore'ı initialize ettik

// Export db
export { db };

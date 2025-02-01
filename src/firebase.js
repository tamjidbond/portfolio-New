import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXjNTrg0uqzw3gneo6afy63JgTqnwl1CA",
  authDomain: "portfolio-new-df43b.firebaseapp.com",
  projectId: "portfolio-new-df43b",
  storageBucket: "portfolio-new-df43b.firebasestorage.app",
  messagingSenderId: "563655231329",
  appId: "1:563655231329:web:7f412d2024e81e43bf2720",
  measurementId: "G-7K7VRK5N9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
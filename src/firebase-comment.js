import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXjNTrg0uqzw3gneo6afy63JgTqnwl1CA",
    authDomain: "portfolio-new-df43b.firebaseapp.com",
    projectId: "portfolio-new-df43b",
    storageBucket: "portfolio-new-df43b.firebasestorage.app",
    messagingSenderId: "563655231329",
    appId: "1:563655231329:web:7f412d2024e81e43bf2720",
    measurementId: "G-7K7VRK5N9P"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
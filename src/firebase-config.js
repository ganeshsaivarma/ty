// src/firebase-config.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // 👈 add Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCw9BhxKvc1Jo2Wrdo4-WW-0B3bYyXGJmo",
  authDomain: "thyroidcheckupapp.firebaseapp.com",
  projectId: "thyroidcheckupapp",
  storageBucket: "thyroidcheckupapp.firebasestorage.app",
  messagingSenderId: "1043294062426",
  appId: "1:1043294062426:web:87fb436f1770eb6e6bd563",
  measurementId: "G-7D2F4DRLJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 👇 Export Firestore database instance
const db = getFirestore(app);

export { app, analytics, db };

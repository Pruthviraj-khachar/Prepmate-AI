import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAgEZoHML7ODZZk3ruaU-g1m2f2vW0ZoLU",
  authDomain: "prepmate-1bb04.firebaseapp.com",
  projectId: "prepmate-1bb04",
  storageBucket: "prepmate-1bb04.firebasestorage.app",
  messagingSenderId: "809213566777",
  appId: "1:809213566777:web:b4d4fa1913dd01aaf1d2e8",
  measurementId: "G-TE5BG1B48G"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE_CONFIG,
  projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE_CONFIG,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE_CONFIG,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE_CONFIG,
  appId: import.meta.env.VITE_APP_ID_FIREBASE_CONFIG,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

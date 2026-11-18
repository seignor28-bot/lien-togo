import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdAqvrcbuUz9v1X1jXkrhIc9TjuDTCGT0",
  authDomain: "gt-saas.firebaseapp.com",
  projectId: "gt-saas",
  storageBucket: "gt-saas.firebasestorage.app",
  messagingSenderId: "308538603664",
  appId: "1:308538603664:web:c7d9da5ae885bf070d0015"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const ENTREPRISE = "lien-togo";

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD270m8obFN9DwAMpgigvJ50-4bqDkLPP8",
  authDomain: "chatting-application1.firebaseapp.com",
  projectId: "chatting-application1",
  storageBucket: "chatting-application1.appspot.com",
  messagingSenderId: "62666276603",
  appId: "1:62666276603:web:abea11ad0b08ea6d1b7a5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()


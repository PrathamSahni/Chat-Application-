import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "realchat-app-194e5.firebaseapp.com",
    projectId: "realchat-app-194e5",
    storageBucket: "realchat-app-194e5.appspot.com",
    messagingSenderId: "760740980451",
    appId: "1:760740980451:web:322fcc0d73e7da09df87d6",
    measurementId: "G-V38NH6NZ3K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
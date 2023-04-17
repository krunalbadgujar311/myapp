import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlopMoQ6G74bo0IlwGCVv5oQTMHxR3YDA",
  authDomain: "faas-chat.firebaseapp.com",
  projectId: "faas-chat",
  storageBucket: "faas-chat.appspot.com",
  messagingSenderId: "560907614578",
  appId: "1:560907614578:web:290a5b57e267ef64b505eb"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
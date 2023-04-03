// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsfv8f5VlRiUNTqCBrl-jPf7ViD2qln1Y",
  authDomain: "chat-248d9.firebaseapp.com",
  projectId: "chat-248d9",
  storageBucket: "chat-248d9.appspot.com",
  messagingSenderId: "932684654933",
  appId: "1:932684654933:web:ccb23568cefb0e3902e7dc"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA36H7zaJh1MfWlNqSwhTCX0O0RG90MnMc",
  authDomain: "proyecto-final-99b49.firebaseapp.com",
  projectId: "proyecto-final-99b49",
  storageBucket: "proyecto-final-99b49.appspot.com",
  messagingSenderId: "469037413822",
  appId: "1:469037413822:web:fdb9f603304032ae8e35ef",
  measurementId: "G-M64LLWFB6N"
  };
    

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
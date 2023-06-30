// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBztSRA8dClejtlR5HabS_TsqQv8_G3f2g",
  authDomain: "fir-todo-app-3534e.firebaseapp.com",
  projectId: "fir-todo-app-3534e",
  storageBucket: "fir-todo-app-3534e.appspot.com",
  messagingSenderId: "318327541144",
  appId: "1:318327541144:web:d753faec7027a6367b2fed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwLEogYy6ez2EC64X-SwlWKCE-R8hz9lo",
  authDomain: "tasks-96986.firebaseapp.com",
  projectId: "tasks-96986",
  storageBucket: "tasks-96986.appspot.com",
  messagingSenderId: "526964025990",
  appId: "1:526964025990:web:5e38ed7b8bb46ca5e17f07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmQ9rd2sDvw41SWNVjpxWDN1BhS8QJp8A",
  authDomain: "board-game-518ed.firebaseapp.com",
  projectId: "board-game-518ed",
  storageBucket: "board-game-518ed.appspot.com",
  messagingSenderId: "70664758660",
  appId: "1:70664758660:web:b41ae834338e6a2723e9d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(auth);



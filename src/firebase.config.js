// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwc1SqhtRwEcAUUGMTs2SJ1ZY9eoTueJI",
  authDomain: "think-and-get.firebaseapp.com",
  projectId: "think-and-get",
  storageBucket: "think-and-get.appspot.com",
  messagingSenderId: "1000943244619",
  appId: "1:1000943244619:web:7911caa2c303c16ca0c4ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
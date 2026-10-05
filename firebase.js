// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa87NpAgsht0Ev4cJh61EXHZmceqqXD4A",
  authDomain: "kolorstones-78dbd.firebaseapp.com",
  projectId: "kolorstones-78dbd",
  storageBucket: "kolorstones-78dbd.firebasestorage.app",
  messagingSenderId: "801373657224",
  appId: "1:801373657224:web:b67b17938b21193f81273d",
  measurementId: "G-6N0E4KKE4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAURAfk7cuOnzs3f_XggAk_lPaUdKgtAoY",
  authDomain: "marioplan-16421.firebaseapp.com",
  projectId: "marioplan-16421",
  storageBucket: "marioplan-16421.appspot.com",
  messagingSenderId: "9905107656",
  appId: "1:9905107656:web:ef82b7be0a7a98af6e6bfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDChFMGbRCYKoXUYCLmNzhHQku5SySyJZE",
  authDomain: "linkedin-clone-4c8dd.firebaseapp.com",
  projectId: "linkedin-clone-4c8dd",
  storageBucket: "linkedin-clone-4c8dd.appspot.com",
  messagingSenderId: "761665124946",
  appId: "1:761665124946:web:44240ac06de3a1de70bd8b",
  measurementId: "G-W357X09F1M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
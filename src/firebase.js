// this code is copypasted from another thing i did
import firebase from "firebase/app";
//these imports are what enable the function calls auth() and database()
import "firebase/auth"; 
import "firebase/database"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "referee-42ffa.firebaseapp.com",
    databaseURL: "https://referee-42ffa.firebaseio.com",
    projectId: "referee-42ffa",
    storageBucket: "referee-42ffa.appspot.com",
    messagingSenderId: "527189579972",
    appId: "1:527189579972:web:74e964b67554da94d15191"
  };

firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCWXuSKY5B6E5kXgA62uEUB4xVRKc5XKm0",
  authDomain: "facebook-clone-9c811.firebaseapp.com",
  projectId: "facebook-clone-9c811",
  storageBucket: "facebook-clone-9c811.appspot.com",
  messagingSenderId: "136812957854",
  appId: "1:136812957854:web:b1221e8a4380e1e4542b8f",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage

export {db,storage};

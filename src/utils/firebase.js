/** @format */

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjNIi1tn6lhnu_rbd17O8FcVvfNVOqles",
  authDomain: "cms-react-7aa96.firebaseapp.com",
  databaseURL: "https://cms-react-7aa96.firebaseio.com",
  projectId: "cms-react-7aa96",
  storageBucket: "cms-react-7aa96.appspot.com",
  messagingSenderId: "182602478032",
  appId: "1:182602478032:web:596d2d5c2728c79eb0c9d5",
  measurementId: "G-QT49R3BFEZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { storage, firestore, auth, firebase as default };

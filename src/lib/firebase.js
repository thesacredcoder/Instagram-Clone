import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAL8igJALo1gk97ZFb3yMkfiw3H2EDFwck",
  authDomain: "instagram-clone-98c16.firebaseapp.com",
  projectId: "instagram-clone-98c16",
  storageBucket: "instagram-clone-98c16.appspot.com",
  messagingSenderId: "570118721651",
  appId: "1:570118721651:web:1565ccdaa5cd6cf67dda06",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);
console.log(firebase);

export { firebase, FieldValue };

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh6wGE6U7OoMP5oAendf1_mKDxUycXS60",
  authDomain: "bookshelf-b4632.firebaseapp.com",
  projectId: "bookshelf-b4632",
  storageBucket: "bookshelf-b4632.appspot.com",
  messagingSenderId: "984267962173",
  appId: "1:984267962173:web:bbab6ce5ff13d32188f754"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

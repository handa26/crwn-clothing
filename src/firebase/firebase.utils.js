import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Firebase configuration
const config = {
  apiKey: "AIzaSyBY8ogvJwUP_PAtzHqFajVDDjN6bEe2MhA",
  authDomain: "crwn-db-de0e5.firebaseapp.com",
  projectId: "crwn-db-de0e5",
  storageBucket: "crwn-db-de0e5.appspot.com",
  messagingSenderId: "573820557005",
  appId: "1:573820557005:web:d48679f7cfd3983e6fbb84",
  measurementId: "G-EPBT87MSG0",
};

// Initialize firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Instance of the google provider object
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

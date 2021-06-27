import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBY8ogvJwUP_PAtzHqFajVDDjN6bEe2MhA",
  authDomain: "crwn-db-de0e5.firebaseapp.com",
  projectId: "crwn-db-de0e5",
  storageBucket: "crwn-db-de0e5.appspot.com",
  messagingSenderId: "573820557005",
  appId: "1:573820557005:web:2519904a39bf240e6fbb84",
  measurementId: "G-85TV07YDWC",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error when storing user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

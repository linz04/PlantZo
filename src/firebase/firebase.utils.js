import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq_kC0cTFpd08ZcsAwU-jCTtRIwqaBdSE",
  authDomain: "crown-clothing-db-23a27.firebaseapp.com",
  projectId: "crown-clothing-db-23a27",
  storageBucket: "crown-clothing-db-23a27.appspot.com",
  messagingSenderId: "95859237440",
  appId: "1:95859237440:web:2afdd5234c7c53406ff5a5",
  measurementId: "G-RGJVH6EN7W",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

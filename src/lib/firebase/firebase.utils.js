import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { withRouter } from "react-router";

const firebaseConfig = {
  apiKey: "AIzaSyDNv8jsETm_X3l8OBxhfOJulaBkUbJVeMo",
  authDomain: "plantzo-db.firebaseapp.com",
  projectId: "plantzo-db",
  storageBucket: "plantzo-db.appspot.com",
  messagingSenderId: "966780361583",
  appId: "1:966780361583:web:52c1bf185f3dd8fda0269a",
  measurementId: "G-GF885806XM",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = ({ history }) => {
  auth.signInWithPopup(provider);
  history.push("/shop");
};

const signInWithGoogleWithRouter = withRouter(signInWithGoogle);

export default firebase;

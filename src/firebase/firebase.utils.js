import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBh6_5t9CqJp17jq4FpWtg3X8jnCUdewyo",
  authDomain: "crwn-db-f6e11.firebaseapp.com",
  databaseURL: "https://crwn-db-f6e11.firebaseio.com",
  projectId: "crwn-db-f6e11",
  storageBucket: "",
  messagingSenderId: "665343406519",
  appId: "1:665343406519:web:64b93efc161cf205e27832",
  measurementId: "G-EWR2471X4R"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, addionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
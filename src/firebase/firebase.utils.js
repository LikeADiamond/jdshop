import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVRXDFBdRR6WsX5_wOFG85XdPeOv2CJCg",
    authDomain: "jddb-88f08.firebaseapp.com",
    databaseURL: "https://jddb-88f08.firebaseio.com",
    projectId: "jddb-88f08",
    storageBucket: "jddb-88f08.appspot.com",
    messagingSenderId: "255032438067",
    appId: "1:255032438067:web:9c78f5b5751f1484a26246",
    measurementId: "G-TPX971JJD0"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
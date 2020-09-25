import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-TzO-m5756VtYxNTPRq7Fu4eYcXq8wEk",
    authDomain: "clone-9cc5f.firebaseapp.com",
    databaseURL: "https://clone-9cc5f.firebaseio.com",
    projectId: "clone-9cc5f",
    storageBucket: "clone-9cc5f.appspot.com",
    messagingSenderId: "371639491726",
    appId: "1:371639491726:web:e796378f5428a590ac7ddf",
    measurementId: "G-RSXSR5CVNV"
  });

  // const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};


  
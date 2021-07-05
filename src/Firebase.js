import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaIG9Yyb9ij42S1QsqfNpzYJz0Vsi2wqY",
    authDomain: "tinder-clone-e60fd.firebaseapp.com",
    projectId: "tinder-clone-e60fd",
    storageBucket: "tinder-clone-e60fd.appspot.com",
    messagingSenderId: "357227594844",
    appId: "1:357227594844:web:bc45abe047d239d67d5299",
    measurementId: "G-K0N2M3FSSR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database
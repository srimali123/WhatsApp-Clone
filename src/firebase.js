import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDI_GoxnRzIX9qeOoFl0XGSKHjaq6J00_s",
    authDomain: "whats-app-clone-f27f0.firebaseapp.com",
    projectId: "whats-app-clone-f27f0",
    storageBucket: "whats-app-clone-f27f0.appspot.com",
    messagingSenderId: "158795504325",
    appId: "1:158795504325:web:eeed54abbd3bde2d09aeac",
    measurementId: "G-67LDR9229K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
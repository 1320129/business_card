import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN_KEY,
    projectId: process.env.REACT_APP_PROJECT_KEY,
    databaseURL: process.env.REACT_APP_DATABASE_KEY,
  };
  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  export default firebaseApp


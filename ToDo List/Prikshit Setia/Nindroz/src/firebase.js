import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyA4_fDrjgff4VYoHFbo-Ex9RBeYHk6pcEY",
    authDomain: "facite-cee45.firebaseapp.com",
    databaseURL: "https://facite-cee45.firebaseio.com",
    projectId: "facite-cee45",
    storageBucket: "facite-cee45.appspot.com",
    messagingSenderId: "727180353174",
    appId: "1:727180353174:web:85ecc688d2311cffd0ecb7",
    measurementId: "G-TY7QWSG4L5"
  };

firebase.initializeApp(config);
export default firebase;
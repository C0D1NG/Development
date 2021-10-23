import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDTT6qrw4aMYu6fj_cLH3YwQIkuH4_7NVg',
	authDomain: 'project-whatsapp-clone-58cb1.firebaseapp.com',
	projectId: 'project-whatsapp-clone-58cb1',
	storageBucket: 'project-whatsapp-clone-58cb1.appspot.com',
	messagingSenderId: '206550990037',
	appId: '1:206550990037:web:9ef18a7642787764dff65c',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref('images');
const audioStorage = firebase.storage().ref('audios');
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
	db,
	auth,
	provider,
	storage,
	audioStorage,
	createTimestamp,
	serverTimestamp,
};

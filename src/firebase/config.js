import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


export const firebaseConfig = {
  apiKey: "AIzaSyCMtFkHls6jYWE1W7MsgvcOejijnszK34s",
  authDomain: "avalith-project.firebaseapp.com",
  projectId: "avalith-project",
  storageBucket: "avalith-project.appspot.com",
  messagingSenderId: "708689865763",
  appId: "1:708689865763:web:c9dd239de5c233bb9dd596"
};


const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseStorage = getStorage(FirebaseApp);



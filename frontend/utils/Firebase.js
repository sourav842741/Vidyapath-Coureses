import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
 authDomain: "e-learning-ca8c2.firebaseapp.com",
  projectId: "e-learning-ca8c2",
  storageBucket: "e-learning-ca8c2.firebasestorage.app",
  messagingSenderId: "9877675122",
  appId: "1:9877675122:web:9aae82b38b84f1cace76eb",
  measurementId: "G-VKP5KEXDSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
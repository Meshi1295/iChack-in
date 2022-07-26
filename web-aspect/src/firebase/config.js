import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD4rdLCSfVp0z4IVkXE_Qa3N8SxyI5ufU",
    authDomain: "icheck-in-e9694.firebaseapp.com",
    projectId: "icheck-in-e9694",
    storageBucket: "icheck-in-e9694.appspot.com",
    messagingSenderId: "517401515004",
    appId: "1:517401515004:web:60360160fc1e2c1ba45879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default getFirestore();
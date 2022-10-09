import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
import { 
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
    
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAb-VVbhqO66MKHHQ4656n2zHcDGseBucg",
  authDomain: "disney-hotstar-clone-3c85f.firebaseapp.com",
  projectId: "disney-hotstar-clone-3c85f",
  storageBucket: "disney-hotstar-clone-3c85f.appspot.com",
  messagingSenderId: "758470050031",
  appId: "1:758470050031:web:d038681b2d272f4fc2db1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




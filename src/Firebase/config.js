import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'; 
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBmSxStFlnDvIKcDyn6VroC5nhYAmZKxcE",
    authDomain: "fir-30dc0.firebaseapp.com",
    projectId: "fir-30dc0",
    storageBucket: "fir-30dc0.appspot.com",
    messagingSenderId: "852291156314",
    appId: "1:852291156314:web:c11c9ccea6b0f0eef55b63",
    measurementId: "G-0RXCH47STJ"
  };

  const app =initializeApp(firebaseConfig)
  export const auth=getAuth(app)
  export const db = getFirestore(app);
  export const imageDB=getStorage(app);
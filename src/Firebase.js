import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAPwwdmcwSLjqCzrs48sM1F8j_E4h1qddg",
    authDomain: "clone-75c41.firebaseapp.com",
    projectId: "clone-75c41",
    storageBucket: "clone-75c41.appspot.com",
    messagingSenderId: "90322746791",
    appId: "1:90322746791:web:81866fd621b09986904a82",
    measurementId: "G-M5KPD4P3TF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);

  export default app;
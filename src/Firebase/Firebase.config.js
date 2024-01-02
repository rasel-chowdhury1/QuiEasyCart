// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8DD8E7XoXHzlQAZj-YXgggVSqIRk59gw",
  authDomain: "quieasycart.firebaseapp.com",
  projectId: "quieasycart",
  storageBucket: "quieasycart.appspot.com",
  messagingSenderId: "827557124250",
  appId: "1:827557124250:web:d540218b21c2c0333ce723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
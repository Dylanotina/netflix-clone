// Import the functions you need from the SDKs you need
import Firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPv-I092gPrPZbhJpBAisy5WnsRlSc-6Q",
  authDomain: "netflix-clone-d352c.firebaseapp.com",
  projectId: "netflix-clone-d352c",
  storageBucket: "netflix-clone-d352c.appspot.com",
  messagingSenderId: "83685433877",
  appId: "1:83685433877:web:eace70dd3c1dca3243641c",
  measurementId: "G-MD2VQPB3F8"
};

// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);



export {app}
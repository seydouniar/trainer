// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA512I_GheGWavCF9K9sLv37cfD4W8LQGo",
  authDomain: "trainer-dde53.firebaseapp.com",
  databaseURL: "https://trainer-dde53-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trainer-dde53",
  storageBucket: "trainer-dde53.appspot.com",
  messagingSenderId: "124924897893",
  appId: "1:124924897893:web:32dcee652520b61fe7348c",
  measurementId: "G-TCTY2GSQNJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });


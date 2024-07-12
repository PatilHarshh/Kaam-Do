// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWWwfngEm61fxd-8KSuc90ZTEptaXlyWs",
  authDomain: "kamado-af94e.firebaseapp.com",
  projectId: "kamado-af94e",
  storageBucket: "kamado-af94e.appspot.com",
  messagingSenderId: "543339757225",
  appId: "1:543339757225:web:8bd4bc072448b6bbb9b3b8",
  measurementId: "G-NYV8TJMJWN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
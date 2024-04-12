// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC5kE7lz5e34V3jCHuF95X4biGHjuDkxg",
    authDomain: "guestbook-6d413.firebaseapp.com",
    projectId: "guestbook-6d413",
    storageBucket: "guestbook-6d413.appspot.com",
    messagingSenderId: "376057063819",
    appId: "1:376057063819:web:d498e7466907526621278e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
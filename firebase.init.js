// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm07f0-1aAonM5VprRCjUkV6WdVILFRJo",
    authDomain: "ravendise-8b08d.firebaseapp.com",
    projectId: "ravendise-8b08d",
    storageBucket: "ravendise-8b08d.appspot.com",
    messagingSenderId: "229573099564",
    appId: "1:229573099564:web:a1f4876a0139991b629189",
    measurementId: "G-DYX0DP0TFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfGe1xiVR97NozJZ3RbqGDcUsV-xsM-Hk",
    authDomain: "fake--auth.firebaseapp.com",
    projectId: "fake--auth",
    storageBucket: "fake--auth.appspot.com",
    messagingSenderId: "848448019328",
    appId: "1:848448019328:web:e3c45919af25c2ff487f65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
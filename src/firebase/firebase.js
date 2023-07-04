import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDx4ssGzTMTPUGvGBOeVbADgIafp2UkeDc",
    authDomain: "cit360.firebaseapp.com",
    projectId: "cit360",
    storageBucket: "cit360.appspot.com",
    messagingSenderId: "58844525827",
    appId: "1:58844525827:web:5fefee6246ad9e2349e536",
    measurementId: "G-FM2YR2JYJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

const analytics = getAnalytics(app);

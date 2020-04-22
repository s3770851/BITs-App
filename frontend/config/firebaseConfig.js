
import '@firebase/auth';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCSinEpdPYxtMr4vYYJA7H6R24bgWeDFFc",
    authDomain: "bits-app-deb3f.firebaseapp.com",
    databaseURL: "https://bits-app-deb3f.firebaseio.com",
    projectId: "bits-app-deb3f",
    storageBucket: "bits-app-deb3f.appspot.com",
    messagingSenderId: "84578029312",
    appId: "1:84578029312:web:c5c199fcd013a2e8beade5",
    measurementId: "G-L46XSW0GF1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
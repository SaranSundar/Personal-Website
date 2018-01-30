// Initialize Firebase
import firebase from "firebase";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBbgaSw5bo6LBbbu8vG5JdJF0xw5PBWpxc",
    authDomain: "personalsite-f5c76.firebaseapp.com",
    databaseURL: "https://personalsite-f5c76.firebaseio.com",
    projectId: "personalsite-f5c76",
    storageBucket: "personalsite-f5c76.appspot.com",
    messagingSenderId: "727844682977"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
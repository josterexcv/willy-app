import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCoeIbzWKUvsXUZCqKVcmKAkhcGw9CvfZQ",
    authDomain: "willyapp-51e9d.firebaseapp.com",
    databaseURL: "https://willyapp-51e9d.firebaseio.com",
    projectId: "willyapp-51e9d",
    storageBucket: "willyapp-51e9d.appspot.com",
    messagingSenderId: "1064707677311",
    appId: "1:1064707677311:web:20a983fa5aacd480bc734a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore ();
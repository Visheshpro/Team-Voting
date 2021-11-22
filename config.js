import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAn5N3kju3Ozhr-cUmJ71barTQoOyP5YKg",
    authDomain: "team-voting-a9986.firebaseapp.com",
    databaseURL: "https://team-voting-a9986-default-rtdb.firebaseio.com",
    projectId: "team-voting-a9986",
    storageBucket: "team-voting-a9986.appspot.com",
    messagingSenderId: "196113292824",
    appId: "1:196113292824:web:0fb6c965e9c06fa0bfed6d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
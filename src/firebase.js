import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC68qRfY7VjvJ9ARTlfCbHgb8MXrnu9KEM",
  authDomain: "yt-prac.firebaseapp.com",
  databaseURL: "https://yt-prac.firebaseio.com",
  projectId: "yt-prac",
  storageBucket: "yt-prac.appspot.com",
  messagingSenderId: "927739738873",
  appId: "1:927739738873:web:2fafaaac38578a4d7a4028",
};

const firesbaseApp = firebase.initializeApp(firebaseConfig);

const database = firesbaseApp.firestore();

export default database;

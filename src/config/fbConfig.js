 import firebase from 'firebase/app'
 import 'firebase/firestore'

  var config = {
    apiKey: "AIzaSyAhR-x6Ak63OXT8gb8_3Wd7byyi-BI92gk",
    authDomain: "financial-app-6bce1.firebaseapp.com",
    databaseURL: "https://financial-app-6bce1.firebaseio.com",
    projectId: "financial-app-6bce1",
    storageBucket: "financial-app-6bce1.appspot.com",
    messagingSenderId: "233028953253"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

 export default firebase;

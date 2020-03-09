import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth';
import '@react-native-firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCI748Qmfn5Nw6pHN6BcVNJbsTirxxMypQ",
    authDomain: "beautyadmapp.firebaseapp.com",
    databaseURL: "https://beautyadmapp.firebaseio.com",
    projectId: "beautyadmapp",
    storageBucket: "beautyadmapp.appspot.com",
    messagingSenderId: "129351131026",
    appId: "1:129351131026:web:6a4528f1850192a4c36b4b",
    measurementId: "G-EJLJ89WSQF"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export default firebase
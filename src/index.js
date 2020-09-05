import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA7JCRz86xSN00RthWC5TKQsbI585oREd4",
  authDomain: "burger-app-901b7.firebaseapp.com",
  databaseURL: "https://burger-app-901b7.firebaseio.com",
  projectId: "burger-app-901b7",
  storageBucket: "burger-app-901b7.appspot.com",
  messagingSenderId: "209289138983",
  appId: "1:209289138983:web:44f15292713a84aa3a0f02",
  measurementId: "G-6G0GCWYSLN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

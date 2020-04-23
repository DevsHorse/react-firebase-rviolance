import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBmwn7tIFGgJ4DqC3jAzMSnufinKcI6KdM",
  authDomain: "todoapp-ba26c.firebaseapp.com",
  databaseURL: "https://todoapp-ba26c.firebaseio.com",
  projectId: "todoapp-ba26c",
  storageBucket: "todoapp-ba26c.appspot.com",
  messagingSenderId: "814719720248",
  appId: "1:814719720248:web:4400d17e61b02e4d6a7fcd",
  measurementId: "G-37JR1E2C55"
};

const fire = firebase.initializeApp(config);
export default fire;
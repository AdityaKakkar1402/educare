// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDK0Y7xCvgLYpHB4r-5O8LkoZjrmM8Opgs",
    authDomain: "discord-clone-f65ff.firebaseapp.com",
    projectId: "discord-clone-f65ff",
    storageBucket: "discord-clone-f65ff.appspot.com",
    messagingSenderId: "885417326146",
    appId: "1:885417326146:web:ba7dddebf879077fda1fdb",
    measurementId: "G-WJDJDBYS1G"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export { auth , provider };
  export default db;

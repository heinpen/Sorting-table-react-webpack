import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

function connectDB(cb) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBVeT3JuMqOgvP8joNaKclC5ykbt1ybL0E',
    authDomain: 'sorting-table-fd4a3.firebaseapp.com',
    databaseURL: 'https://sorting-table-fd4a3-default-rtdb.firebaseio.com',
    projectId: 'sorting-table-fd4a3',
    storageBucket: 'sorting-table-fd4a3.appspot.com',
    messagingSenderId: '368922558232',
    appId: '1:368922558232:web:1b28fb6537a1fb4e9e686d',
  };
  // Initialize Firebase.
  firebase.initializeApp(firebaseConfig);

  function databaseInit() {
    return firebase.database().ref('/').once('value');
  }

  let data;
  databaseInit()
    .then((answer) => {
      data = answer.val();
    })
    .then(() => {
      cb(data);
    });
}

export default connectDB;

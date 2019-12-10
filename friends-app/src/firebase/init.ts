import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCHnEdIhv5PAG4YbcOw4nFZdJh5poYsmlg',
    authDomain: 'friendsapp-d15fb.firebaseapp.com',
    databaseURL: 'https://friendsapp-d15fb.firebaseio.com',
    projectId: 'friendsapp-d15fb',
    storageBucket: 'friendsapp-d15fb.appspot.com',
    messagingSenderId: '345804993652',
    appId: '1:345804993652:web:5ed5b6181f51faaf8e4d21',
};

firebase.initializeApp(firebaseConfig);

export const dbConfig = {
    db: firebase.database(),
    dbAuth: firebase.auth(),
    dbFireStore: firebase.firestore(),
    dbStorage: firebase.storage(),
};

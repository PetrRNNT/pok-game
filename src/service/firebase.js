import firebase from "firebase/app";
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBOwJeYaJwSBP7pP-UcKL6fqdUAGuNtuAQ",
    authDomain: "poke-game-b6021.firebaseapp.com",
    databaseURL: "https://poke-game-b6021-default-rtdb.firebaseio.com",
    projectId: "poke-game-b6021",
    storageBucket: "poke-game-b6021.appspot.com",
    messagingSenderId: "909985329558",
    appId: "1:909985329558:web:6fd62daa47cdcff9676db7"
};

firebase.initializeApp(firebaseConfig)

export const fire = firebase;
export const database = firebase.database();

export default database


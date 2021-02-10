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

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off()
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key
        this.database.ref( ['/pokemons/' + newKey]).set(data).then(() => cb())
    }
}

export default Firebase


import React, {useState, useEffect} from "react";
import PokemonCard from "../../Components/PokemonCard/pokemoncard";
import database from "../../service/firebase";
import cn from "classnames";

import style from './style.module.css'


const GamePage = () => {
    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        database.ref('pokemons').on('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    }, [])

    const handlerClickCard = (id) => {

        setPokemons(prevState => {

            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};

                if (pokemon.id === id) {
                    pokemon.isActive = !pokemon.isActive;
                    database.ref('pokemons/' + item[0]).set(pokemon).then(
                        setPokemons(prevState => {
                            return {...prevState, [item[0]] : pokemon}
                        })
                    )
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const NewPokemon = {
        "abilities": [
            "keen-eye",
            "tangled-feet",
            "big-pecks"
        ],
        "base_experience": 122,
        "height": 11,
        "id": '',
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "name": "pidgeotto",
        "stats": {
            "attack": 60,
            "defense": 55,
            "hp": 63,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 71
        },
        "type": "flying",
        "values": {
            "bottom": 7,
            "left": 5,
            "right": 2,
            "top": "A"
        }
    }

    const addNewPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key
        const updates = {}
        NewPokemon.id = Math.floor(Math.random() * 1000) + 1
        updates['/pokemons/' + newKey] = NewPokemon
        return database.ref().update(updates).then(
            setPokemons(prevState => {
                return {...prevState, [newKey] : NewPokemon}
            })
        )
    }


    return (
        <>
            <button onClick={addNewPokemon} className={cn(style.customBtn, style.btn)}>Add new pokemon</button>
            <div className={style.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, values, type, isActive}]) => <PokemonCard
                        name={name}
                        img={img}
                        id={id}
                        values={values}
                        type={type}
                        key={key}
                        isActive={isActive}
                        handlerClickCard={handlerClickCard}
                    />)
                }
            </div>
        </>
    )
}

export default GamePage;
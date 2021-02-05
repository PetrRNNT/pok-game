import React, {useState} from "react";
import PokemonCard from "../../Components/PokemonCard/pokemoncard";
import pokemonsData from "../../pokemon-cards.json"

import style from './style.module.css'

const POKEMONS = pokemonsData;

const GamePage = () => {

    const [pokemons, setPokemons] = useState(POKEMONS)

    const handlerClickCard = (id) => {
        setPokemons(prevState => Array.from(prevState, (pokemon) => {
            const newPokemon = {...pokemon}
                if (newPokemon.id === id) {
                    newPokemon.isActive = !newPokemon.isActive;
                }
                    return newPokemon
            })
        )};


    return (
        <div className={style.flex}>
            {
                pokemons.map(item => <PokemonCard
                    name={item.name}
                    img={item.img}
                    id={item.id}
                    values={item.values}
                    type={item.type}
                    key={item.id}
                    isActive={item.isActive}
                    handlerClickCard={handlerClickCard}
                />)
            }
        </div>
    )
}

export default GamePage;
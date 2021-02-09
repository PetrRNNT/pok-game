import React, {useState, useEffect, useContext} from "react";
import {FireBaseContext} from "../../../../context/firebaseContext";
import PokemonCard from "../../../../Components/PokemonCard/pokemoncard";
import {PokemonContext} from "../../../../context/pokemonContext";
import cn from "classnames";
import {Link} from "react-router-dom";

import style from './style.module.css'

const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons)
        })
    }, [])

    const SelectedContext = useContext(PokemonContext)

    const handlerClickCard = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id && !pokemon.isSelected) {
                    pokemon.isSelected = true;
                    pushToContext(item);
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
    };

    const pushToContext = (item) => {
        SelectedContext.pokemons.push(item)
    }
    return (
        <>
            <Link
                to="/game/board"
                className={cn(style.customBtn, style.btn)}
            >
                Start Game
            </Link>
            <div className={style.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, values, type, isSelected}]) => <PokemonCard
                        name={name}
                        img={img}
                        id={id}
                        values={values}
                        type={type}
                        key={key}
                        isActive={true}
                        handlerClickCard={handlerClickCard}
                        className={style.cardRoot}
                        isSelected={isSelected}
                    />)
                }
            </div>
        </>
    )
}

export default StartPage;
import React, {useState, useEffect, useContext} from "react";
import {useHistory} from "react-router-dom";
import {FireBaseContext} from "../../../../context/firebaseContext";
import PokemonCard from "../../../../Components/PokemonCard/pokemoncard";
import {PokemonContext} from "../../../../context/pokemonContext";
import cn from "classnames";

import style from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPokemonsAsync, selectPokemonsData, selectPokemonsLoading} from "../../../../store/pokemons";

const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const SelectedContext = useContext(PokemonContext)
    const isLoading = useSelector(selectPokemonsLoading)
    const pokemonsRedux = useSelector(selectPokemonsData)
    const dispatch = useDispatch()

    const [pokemons, setPokemons] = useState({})
    const history = useHistory()


    useEffect(() => {
        SelectedContext.inSelect(null)

        dispatch(getPokemonsAsync())
    }, [])

    useEffect(() => {
        setPokemons(pokemonsRedux)
    }, [pokemonsRedux])

    console.log('pokemonsRedux ', pokemonsRedux)
    console.log(SelectedContext.pokemons)
    const handlerClickCard = (key) => {
        const pokemon = {...pokemons[key]}
        SelectedContext.inSelect(key, pokemon)

        setPokemons(prevState => ({
            ...prevState,
                [key]: {
                ...prevState[key],
                    isSelected: !prevState[key].isSelected,
                }

        }));
    };

    const onStartGameClick = () => {
        history.push('/game/board')
    }

    return (
        <>
            <button
                onClick={onStartGameClick}
                disabled={Object.keys(SelectedContext.pokemons).length < 5}
                className={cn(style.customBtn, style.btn)}
            >
                Start Game
            </button>
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
                        handlerClickCard={() => {
                            if (Object.keys(SelectedContext.pokemons).length < 5 || isSelected){
                                handlerClickCard(key)
                            }
                        }}
                        className={style.cardRoot}
                        isSelected={isSelected}
                    />)
                }
            </div>
        </>
    )
}

export default StartPage;
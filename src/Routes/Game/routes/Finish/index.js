import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../context/pokemonContext";
import {FireBaseContext} from "../../../../context/firebaseContext";
import PokemonCard from "../../../../Components/PokemonCard/pokemoncard";
import cn from 'classnames'

import style from "../Start/style.module.css";


const FinishPage = () => {
    const firebase = useContext(FireBaseContext)
    const {pokemons, pokemonsTwo} = useContext(PokemonContext)
    const history = useHistory()

    const arr = []

    const handlerClickCard = (take) => {
        arr.length = 0

        Object.values(pokemonsTwo).map(item => {
            if (take === item.id) {
                item.isTake = !item.isTake
                arr.push(item)
            }
        })
    }

    const newKey = firebase.database.ref().child('pokemons').push().key
    const takePokemons = () => firebase.postPokemon(newKey, arr[0])

    const endGame = () => {
            takePokemons()

        history.replace('/game')
    }

    return (
        <>
            <div className={cn(style.flex, style.noWrap)}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, values, type, isSelected}]) => <PokemonCard
                        name={name}
                        img={img}
                        id={id}
                        values={values}
                        type={type}
                        key={key}
                        isActive={true}
                        className={style.cardRoot}
                        isSelected={isSelected}
                    />)
                }
            </div>
            <div className={style.flex}>
                <button
                    onClick={endGame}
                >
                    END GAME
                </button>
            </div>
            <div className={cn(style.flex, style.noWrap)}>
                {
                    Object.entries(pokemonsTwo).map(([key, {name, img, id, values, type, isTake}]) => <PokemonCard
                        name={name}
                        img={img}
                        id={id}
                        values={values}
                        type={type}
                        key={key}
                        isActive={true}
                        isTake={isTake}
                        className={style.cardRoot}
                        handlerClickCard={handlerClickCard}
                    />)
                }
            </div>
        </>
    )
}

export default FinishPage;
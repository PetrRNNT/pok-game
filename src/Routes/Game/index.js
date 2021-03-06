import {React, useState} from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../context/pokemonContext"

const GamePage = () => {
        const [selectedPokemons, setSelectedPokemons] = useState({})
        const [pokemonsPlayerTwo, setPokemonsPlayerTwo] = useState({})

        const match = useRouteMatch();

        const handlerIsSelect = (key, pokemon) => {
            setSelectedPokemons(prevState => {
            if ( prevState[key] ){
                const copyState = {...prevState}
                delete copyState[key]

                return copyState
            }
                return {
                    ...prevState,
                    [key]: pokemon
                }
            })
        }
        const handlerIsSelectTake = (item) => {
            console.log("handle-item", item)
        }

        return (
            <PokemonContext.Provider value={{
                pokemons: selectedPokemons,
                pokemonsTwo: pokemonsPlayerTwo,
                inSelect: handlerIsSelect,
                inSelectTake: handlerIsSelectTake,
                setPokemonsPlayerTwo
            }}>
                <Switch>
                    <Route path={`${match.path}/`} exact component={StartPage} />
                    <Route path={`${match.path}/board`} component={BoardPage} />
                    <Route path={`${match.path}/finish`} component={FinishPage} />
                </Switch>
            </PokemonContext.Provider>
        );
    };


export default GamePage;
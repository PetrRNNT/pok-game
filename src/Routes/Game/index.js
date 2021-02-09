import {React, useState} from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../context/pokemonContext"

const GamePage = () => {
        const match = useRouteMatch();

        const [pokemons, setPokemons] = useState([])

        const handlerIsSelect = (val) => {
            setPokemons(val)
        }

        return (
            <PokemonContext.Provider value={{pokemons, inSelect: handlerIsSelect}}>
                <Switch>
                    <Route path={`${match.path}/`} exact component={StartPage} />
                    <Route path={`${match.path}/board`} component={BoardPage} />
                    <Route path={`${match.path}/finish`} component={FinishPage} />
                </Switch>
            </PokemonContext.Provider>
        );
    };


export default GamePage;
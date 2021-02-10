import React, {useContext} from 'react'
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../Components/PokemonCard/pokemoncard";

import style from './style.module.css';

const BoardPage = () => {
    const { pokemons } = useContext(PokemonContext)
      return (
        <div className={style.root}>
            <div className={style.playerOne}>
                {
                    Object.values(pokemons).map(({name, img, id, values, type}) => <PokemonCard
                        name={name}
                        img={img}
                        id={id}
                        values={values}
                        type={type}
                        key={id}
                        isActive
                        minimize
                        className={style.card}
                    />)
                }
            </div>
            <div className={style.board}>
                <div className={style.boardPlate}>1</div>
                <div className={style.boardPlate}>2</div>
                <div className={style.boardPlate}>3</div>
                <div className={style.boardPlate}>4</div>
                <div className={style.boardPlate}>5</div>
                <div className={style.boardPlate}>6</div>
                <div className={style.boardPlate}>7</div>
                <div className={style.boardPlate}>8</div>
                <div className={style.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
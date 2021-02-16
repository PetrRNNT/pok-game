import React, {useState} from "react";
import PokemonCard from "../../../../../../Components/PokemonCard/pokemoncard";
import cn from 'classnames'
import style from "./style.module.css";

const PlayerBoard = ( {player, cards, onClickCard} ) => {
    const [isSelected, setSelected] = useState(null)

    return (
        <>
            {
                cards.map((item) => (
                    <div
                        key={item.id}
                        className={cn(style.cardBoard, {
                            [style.selected]: isSelected === item.id
                        })}
                        onClick={() => {
                            setSelected(item.id)
                            onClickCard && onClickCard({
                                player,
                                ...item,
                            })
                        }}
                        >
                        <PokemonCard
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            values={item.values}
                            type={item.type}
                            key={item.id}
                            isActive
                            minimize
                        />
                    </div>
                ))
            }
        </>
    )
}

export default PlayerBoard
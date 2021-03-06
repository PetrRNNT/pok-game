import React, {useState} from "react";
import Header from "../../Components/Header/header";
import Layout from "../../Components/Layout/layout";

import style from './style.module.css'

import urlBgImage from '../../image/bg2.jpg';
import urlBgImage2 from '../../image/bg1.jpg';
import imgLeague from "../../image/rate-this-image.png";
import {useDispatch, useSelector} from "react-redux";
import {plusAction, selectCount} from "../../store/counter";



const HomePage = () => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    console.log('count', count)
    const [isLanguage, setLanguage] = useState(false);

    function handleClickLanguage() {
        setLanguage(!isLanguage);
        dispatch(plusAction(1))
    }

    return (

        <React.Fragment>

            <Header
                title="Pokemon Game"
                descr="This is simple triple triad card game!"
            />

            <Layout
                title="The strongest will win"
                urlBg={urlBgImage}
                id={'l-1'}
            >
                <div className={style.changeLanguage}>
                    <button onClick={handleClickLanguage}>{isLanguage ? 'EN' : 'RU'}</button>
                    {
                        isLanguage ?
                            <p>
                                В игре два игрока сталкиваются друг с другом, одна сторона играет как "синий", другая
                                как
                                "красный" на сетке 3х3.
                                Каждый игрок имеет пять карт в руке, и цель состоит в том, чтобы захватить карты
                                противника,
                                превратив их в собственный цвет игрока красного или синего.
                            </p>
                            :
                            <p>
                                In the game two players face off against one another, one side playing as "blue", the
                                other as "red" on a 3x3 grid.
                                Each player has five cards in a hand and the aim is to capture the opponent's cards by
                                turning them into the player's own color of red or blue.
                            </p>
                    }
                </div>
            </Layout>

            <Layout
                title="Battle League"
                colorBg="#DFCFBE"
                id={'l-2'}
            >
                <div>
                    <img src={imgLeague} alt="League" className={style.league}/>
                </div>
            </Layout>

            <Layout
                title="Don't stop there"
                urlBg={urlBgImage2}
                id={'l-3'}
            >
                <div className={style.changeLanguage}>
                    <button onClick={handleClickLanguage}>{isLanguage ? 'EN' : 'RU'}</button>
                    {
                        isLanguage ?
                            <p>
                                Чтобы выиграть, большинство из десяти сыгранных карт (включая одну карту, которая не является
                                размещенные на доске) должны быть цвета карты игрока. Для этого
                                игрок должен захватить карты, поместив карту рядом с картой противника, после чего
                                "ряды" сторон, где соприкасаются две карты, будут сравниваться.
                                Если ранг карты противника выше, чем у игрока, то карта игрока
                                будет захвачен и превращен в цвет противника. Если ранг игрока выше, то
                                карта противника будет захвачена и заменена на цвет игрока.
                            </p>
                            :
                            <p>
                                To win, a majority of the total ten cards played (including the one card that is not
                                placed on the board) must be of the player's card color. To do this,
                                the player must capture cards by placing a card adjacent to an opponent's card whereupon
                                the 'ranks' of the sides where the two cards touch will be compared.
                                If the rank of the opponent's card is higher than the player's card, the player's card
                                will be captured and turned into the opponent's color. If the player's rank is higher,
                                the opponent's card will be captured and changed into the player's color instead.
                            </p>
                    }
                </div>
            </Layout>



        </React.Fragment>

    );
}

export default HomePage;
import {Link} from "react-router-dom";
import cn from "classnames";

import style from './style.module.css'

const Header = ({title, descr}) => {


    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.silhouette}></div>
            <div className={style.moon}></div>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <div className={style.frame}>
                    <Link
                        to="/game"
                        className={cn(style.customBtn, style.btn)}
                    >
                        Start Game
                    </Link>
                </div>
            </div>
        </header>
    );
}


export default Header;

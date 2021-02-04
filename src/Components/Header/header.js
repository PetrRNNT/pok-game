import style from './style.module.css'
import cn from "classnames";

const Header = ({title, descr, onClickButton}) => {

    const handleClick = () => {
        console.log('Header')
        onClickButton && onClickButton('game');
    }

    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <div className="frame">
                    <button
                        onClick={handleClick}
                        className={cn(style.customBtn, style.btn)}
                    >
                        Start Game
                    </button>
                </div>
            </div>
        </header>
    );
}


export default Header;

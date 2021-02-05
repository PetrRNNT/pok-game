import cn from 'classnames'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const MENU = [
    {
        title : "HOME",
        to : "/"
    },
    {
        title : "GAME",
        to : "game"
    },
    {
        title : "ABOUT",
        to : "about"
    },
    {
        title : "CONTACT",
        to : "contact"
    },
]

const Menu = ({isOpen, onClickMenu}) => {

    return (
        <div className={cn(style.menuContainer, {
            [style.active]: isOpen === true,
            [style.deactive]: isOpen === false
            })}>
            <div className={style.overlay}/>
            <div>
                <ul>
                    {
                        MENU.map(({title,to}, index) => (
                            <li key={index}>
                                <Link to={to} className={cn(style.customBtn, style.btnRn)} onClick={onClickMenu}>
                                    <span>{title}</span>
                                    <span>{title}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;
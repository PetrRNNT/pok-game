import cn from 'classnames'
import logo from '../../../image/super-pokemon.png'

import style from './style.module.css'



const Navbar = ({isOpen, onClickMenu, bgActive = null}) => {


    return (
        <nav id={style.navbar} className={cn({
            [style.bgActive]: bgActive
        })}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    <img src={logo} alt="pika"/>
                </p>
                <div
                    className={cn(style.menuButton, {
                        [style.active]: isOpen
                    })}
                    onClick={onClickMenu}
                >
                    <span/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
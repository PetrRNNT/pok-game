import cn from 'classnames'
import logo from '../../../image/super-pokemon.png'
import { ReactComponent as LoginSvg } from '../../../image/login.svg'

import style from './style.module.css'



const Navbar = ({isOpen, onClickMenu, bgActive = null, onClickLogin}) => {


    return (
        <nav id={style.navbar} className={cn({
            [style.bgActive]: bgActive
        })}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    <img src={logo} alt="pika"/>
                </p>
                <div className={style.loginAndMenu}>
                    <div 
                        className={style.loginWrap}
                        onClick={onClickLogin}>
                        <LoginSvg />
                    </div>
                    <div
                        className={cn(style.menuButton, {
                            [style.active]: isOpen
                        })}
                        onClick={onClickMenu}
                    >
                        <span/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
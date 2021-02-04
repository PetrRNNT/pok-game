import { useState } from 'react'
import cn from 'classnames'

import style from './style.module.css'

const Navbar = ({isActive, onClickMenu}) => {

    const handleClick = () => {
        onClickMenu && onClickMenu();
    }

    return (
        <nav id={style.navbar}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <a
                    className={cn(style.menuButton, {[style.active]: isActive})}
                    onClick={handleClick}
                >
                    <span/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
import React, { useState } from 'react'
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = () => {

    const [isActive, setActive] = useState(false);

    const handleClickButton = () => {
        setActive(!isActive)
    }
    return (
        <React.Fragment>
            <Menu
                isActive={isActive}
            />
            <Navbar
                isActive={isActive}
                onClickMenu={handleClickButton}
            />
        </React.Fragment>
    )
}

export default MenuHeader;
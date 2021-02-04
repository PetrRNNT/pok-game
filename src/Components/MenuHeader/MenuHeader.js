import React, { useState } from 'react'
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = ({bgActive}) => {

    const [isOpen, setOpen] = useState(null);

    const handleClickButton = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <React.Fragment>
            <Menu
                isOpen={isOpen}
                onClickMenu={handleClickButton}
            />
            <Navbar
                isOpen={isOpen}
                bgActive={bgActive}
                onClickMenu={handleClickButton}
            />
        </React.Fragment>
    )
}

export default MenuHeader;
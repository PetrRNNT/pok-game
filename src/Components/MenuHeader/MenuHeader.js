import React, { useState } from 'react'
import Menu from "./Menu";
import Navbar from "./Navbar";
import Modal from "./../Modal";

const MenuHeader = ({ bgActive }) => {

    const [isOpen, setOpen] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    const handleClickButton = () => {
        setOpen(prevState => !prevState);
    }

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState)
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
                onClickLogin={handleClickLogin}
            />
            <Modal
                isOpen={isOpenModal}
                title="Log in..."
                onCloseModal={handleClickLogin}
            >
                Some Text Here...
            </Modal>
        </React.Fragment>
    )
}

export default MenuHeader;
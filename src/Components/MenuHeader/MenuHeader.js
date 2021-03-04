import React, { useState } from 'react'
import {NotificationManager} from "react-notifications";

import Menu from "./Menu";
import Navbar from "./Navbar";
import Modal from "./../Modal";
import LoginForm from "../LoginForm";

const MenuHeader = ({ bgActive }) => {

    const [isOpen, setOpen] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    const handleClickButton = () => {
        setOpen(prevState => !prevState);
    }

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState)
    }

    const handleSubmitLoginForm = async ({email, password}) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        }
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOwJeYaJwSBP7pP-UcKL6fqdUAGuNtuAQ', requestOptions)
        //const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOwJeYaJwSBP7pP-UcKL6fqdUAGuNtuAQ', requestOptions)
            .then(res => res.json())
        console.log('res', response)
        if (response.hasOwnProperty('error')){
            NotificationManager.error(response.error.message, 'Wrong!')
        } else {
            localStorage.setItem('idToken', response.idToken)
            NotificationManager.success('Successfully registered')
        }
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
                <LoginForm
                    onSubmit={handleSubmitLoginForm}
                />
            </Modal>
        </React.Fragment>
    )
}

export default MenuHeader;
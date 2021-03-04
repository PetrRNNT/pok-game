import { useEffect, useRef } from 'react'
import cn from 'classnames'
import LoginForm from './../LoginForm'

import style from './style.module.css'

const Modal = ({isOpen, title, children, onCloseModal}) => {

    const modalEl = useRef()

    useEffect(() => {
        document.querySelector('body').style.overflow= isOpen ? 'hidden' : null
    }, [isOpen])

    const handleCloseModal = () => {
        onCloseModal && onCloseModal(false) 
    }

    const handleClickRoot = (event) => {
        if(!modalEl.current.contains(event.target)){
            handleCloseModal()
        }
    }

    return (
        <div className={cn(style.root, {
            [style.open]:isOpen
            })}
            onClick={handleClickRoot}
            >
            <div 
                ref={modalEl}
                className={style.modal}>
                <div className={style.head}>
                    { title }
                    <span 
                        onClick={handleCloseModal}
                        className={style.btnClose}
                    >

                    </span>
                </div>
                <div className={style.content}>
                    { children }
            </div>
            </div>
        </div>
    )
}

export default Modal
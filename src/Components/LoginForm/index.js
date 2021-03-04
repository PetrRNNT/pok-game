import { useState, useEffect, useRef } from "react"
import Input from '../Input'
import style from './style.module.css'


const LoginForm = ({onSubmit}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerOnSubmit = (e) => {
        e.preventDefault()

        onSubmit && onSubmit({
            email,
            password,
        })

        setEmail('')
        setPassword('')
    }

    return (
        <form
            onSubmit={handlerOnSubmit}
        >
            <Input 
                label="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Password"
                value={password}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>
                signin
            </button>
        </form>
    )
}

export default LoginForm
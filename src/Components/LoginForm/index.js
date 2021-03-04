import { useState } from "react"
import Input from '../Input'


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

    const onChangeHandler = (event) => {
        console.log({value: event.target.value})
    }

    return (
        <form onSubmit={handlerOnSubmit}>
            <Input 
                label="Email"
                value={email}
                name="email"
                onChange={onChangeHandler}
            />
            <Input 
                label="Password"
                value={password}
                type="password"
                name="password"
                onChange={onChangeHandler}
            />
        </form>
    )
}

export default LoginForm
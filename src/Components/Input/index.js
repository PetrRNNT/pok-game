import style from './style.module.css'

const Input = ({value, label, type = "text", name, onChange, required}) => {
    return (
        <div className={style.root}>
            <input 
                type={type} 
                name={name}
                value={value}
                className={style.input} 
                onChange={onChange}
                required
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label className={style.label}>{label}</label>
        </div>
    )
}

export default Input
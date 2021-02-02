import cn from 'classnames'
import style from './style.module.css'

const GamePage = ({onChangePage}) => {
    const handleClick = () => {
        onChangePage && onChangePage('app');
    }
    return (
        <div>
            <h2>
                This is Game Page !!!
            </h2>


            <button
                onClick={handleClick}
                className={cn(style.customBtn, style.btn)}
            >
               Home
            </button>
        </div>
    )
}

export default GamePage;
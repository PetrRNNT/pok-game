import pokeball from '../../image/pokeball-hd-png.png'
import MenuHeader from "../../Components/MenuHeader/MenuHeader";
import style from "./style.module.css";

const NotFound = () => {
    return (
        <>
            <div className={style.content}>
                <h2>
                    <img src={pokeball} alt=""/>
                    <span className={style.text}>Page Not Found :(</span>
                </h2>
            </div>
        </>
    )
}

export default NotFound;
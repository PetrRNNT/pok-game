import styles from './style.module.css'


const Layout = ({title, id, urlBg, colorBg, children} ) => {
    const style = {};
    if (urlBg) { style.backgroundImage= `url(${urlBg})` }
    if (colorBg) { style.backgroundColor= colorBg }
    return (
        <section className={styles.root} id={id} style={style}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        {title && (<h3> {title} </h3>)}
                        <span className={styles.separator}></span>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}


export default Layout;
import styles from './style.module.css'


const Layout = ({title, descr, id, urlBg, colorBg} ) => {
    const styleBg = urlBg ? {backgroundImage: `url(${urlBg})`} : {};
    const styleColor = colorBg ? {backgroundColor: colorBg} : {};
    const styleRoot = urlBg !== undefined ? styleBg : styleColor;
    console.log(styleColor)
    return (
        <section className={styles.root} id={id} style={styleRoot}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        {title && (<h3> {title} </h3>)}
                        <span className={styles.separator}></span>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`}>
                        {descr && (<p> {descr} </p>)}
                    </div>
                </article>
            </div>
        </section>
    );
}


export default Layout;
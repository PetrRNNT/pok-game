import React from "react";
import Header from "./Components/Header/header";
import Layout from "./Components/Layout/layout";
import urlBgImage from './image/bg2.jpg';
import urlBgImage2 from './image/bg1.jpg';
import Footer from "./Components/Footer/footer";

const App = () => {
    return (
        <>
            <Header
                title= "This is title"
                descr= "This is Description!"
            />
            <Layout
                title= "This is Layout-1"
                descr= "This is Description Layout-1!"
                urlBg={urlBgImage}
                id={'l-1'}
            />
            <Layout
                title= "This is Layout-2"
                descr= "This is Description Layout-2!"
                colorBg="#DFCFBE"
                id={'l-2'}
            />
            <Layout
                title= "This is Layout-3"
                descr= "This is Description Layout-3!"
                urlBg={urlBgImage2}
                id={'l-3'}
            />
            <Footer />
       </>
    );
}

export default App;
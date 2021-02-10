import {useLocation, Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./Routes/Home";
import GamePage from "./Routes/Game";
import NotFound from "./Routes/NotFound";
import AboutPage from "./Routes/AboutPage";
import ContactPage from "./Routes/ContactPage";
import MenuHeader from "./Components/MenuHeader/MenuHeader";
import Footer from "./Components/Footer/footer";
import cn from 'classnames';

import {FireBaseContext} from "./context/firebaseContext";

import style from './style.module.css';
import Firebase from "./service/firebase";
import React from "react";


const App = () => {
    const location = useLocation('/');
    const isPadding = location.pathname === '/' || location.pathname === '/game/board'

    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route path="/404" component={NotFound}/>
                <Route>
                    <>
                        <MenuHeader bgActive={!isPadding}/>
                        <div className={cn(style.wrap, {
                            [style.isHomePage]: isPadding
                        })}>
                            <Switch>

                                <Route path="/" exact component={HomePage}/>
                                <Route path="/game" component={GamePage}/>
                                <Route path="/about" component={AboutPage}/>
                                <Route path="/contact" component={ContactPage}/>
                                <Route render={() => (
                                    <Redirect to="/404"/>
                                )}/>

                            </Switch>
                        </div>
                        <Footer/>
                    </>
                </Route>
            </Switch>
        </FireBaseContext.Provider>
    )
}

export default App;
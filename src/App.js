import {useRouteMatch, Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
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
    const match = useRouteMatch('/');

    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route path="/404" component={NotFound}/>
                <Route>
                    <>
                        <MenuHeader bgActive={!match.isExact}/>
                        <div className={cn(style.wrap, {
                            [style.isHomePage]: match.isExact
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
import {useLocation, Switch, Route, Redirect} from "react-router-dom";
import cn from 'classnames';
import {NotificationContainer} from "react-notifications";

import HomePage from "./Routes/Home";
import GamePage from "./Routes/Game";
import NotFound from "./Routes/NotFound";
import AboutPage from "./Routes/AboutPage";
import ContactPage from "./Routes/ContactPage";
import MenuHeader from "./Components/MenuHeader/MenuHeader";
import Footer from "./Components/Footer/footer";
import {FireBaseContext} from "./context/firebaseContext";

import style from './style.module.css';
import 'react-notifications/lib/notifications.css'
import FirebaseClass from "./service/firebase";
import PrivateRoute from "./Components/PrivateRoute";


const App = () => {
    const location = useLocation('/');
    const isPadding = location.pathname === '/' || location.pathname === '/game/board'

    return (
        <FireBaseContext.Provider value={FirebaseClass}>
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
                                <PrivateRoute path="/game" component={GamePage}/>
                                <PrivateRoute path="/about" component={AboutPage}/>
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
            <NotificationContainer/>
        </FireBaseContext.Provider>
    )
}

export default App;
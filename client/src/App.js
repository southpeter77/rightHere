import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserList from './components/UsersList';
import WebcamCapture from "./components/Camera"
import LogIn from "./components/auth/LogIn"
import SignUp from "./components/auth/SignUp"
import PrivateRoute from "./utils/PrivateRoute"
import ProtectedRoute from "./utils/ProtectedRoute"
import Theme from './Theme';
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home"
import { loadToken } from "./components/store/actions/sessions/currentUser"
import Login from './components/auth/LogIn';
import LogOut from "./components/auth/LogOut"
function App({ needLogin, loadToken }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        loadToken();
    }, []);

    if (!loaded) {
        return null;
    }


    //          <PrivateRoute exact={true} path="/users" needLogin={needLogin} component={UserList}/>
    return (
        <CssBaseline>
            <Theme>
                <BrowserRouter>
                    <ProtectedRoute exact={true} path="/logIn" needLogin={needLogin} component={Login} />
                    <ProtectedRoute exact={true} path="/signup" needLogin={needLogin} component={SignUp} />
                    {/* <nav>
                        <LogOut></LogOut>
                        <ul>
                            <li><NavLink to="/" activeClass="active">Home</NavLink></li>
                            <li><NavLink to="/users" activeClass="active">Users</NavLink></li>
                            <li><NavLink to="/camera" activeClass="active">camera</NavLink></li>

                        </ul>
                    </nav> */}
                    <Switch>
                        <PrivateRoute exact path="/" needLogin={needLogin} component={Home} />


                        {/*             
                <Route exact={true} path="/users">
                    <UserList />
                </Route> */}
                        <Route exact={true} path="/camera">
                            <WebcamCapture></WebcamCapture>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Theme>
        </CssBaseline>
    );
}

const AppContainer = () => {
    const needLogin = useSelector((state) => !state.sessions.currentToken);
    const dispatch = useDispatch();
    return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
};

export default AppContainer

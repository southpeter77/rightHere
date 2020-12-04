import React from 'react';
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

function App() {

    return (
        <CssBaseline>
        <Theme>
        <BrowserRouter>
            {/* <WebcamCapture></WebcamCapture> */}
            <Route exact={true} path="/logIn">
                <LogIn></LogIn>
            </Route>
            <Route exact={true} path="/signUp">
                <SignUp></SignUp>
            </Route>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeClass="active">Users</NavLink></li>
                    <li><NavLink to="/camera" activeClass="active">camera</NavLink></li>

                </ul>
            </nav>
            <Switch>
                <Route exact={true} path="/users">
                    <UserList />
                </Route>
                <Route exact={true} path="/camera">
                    <WebcamCapture></WebcamCapture>
                </Route>
            </Switch>
        </BrowserRouter>
        </Theme>
    </CssBaseline>
    );
}

// const AppContainer = () => {
//     const needLogin = useSelector((state) => !state.user.token);
//     const dispatch = useDispatch();
//     return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
//   };
  
export default App
  
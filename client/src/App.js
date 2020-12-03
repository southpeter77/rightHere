import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserList from './components/UsersList';
import WebcamCapture from "./components/Camera"
import LogIn from "./components/auth/LogIn"
import PrivateRoute from "./utils/PrivateRoute"
import ProtectedRoute from "./utils/ProtectedRoute"

function App() {

    return (
        <BrowserRouter>
            {/* <WebcamCapture></WebcamCapture> */}
            <Route exact={true} path="/">
                <LogIn></LogIn>
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
    );
}

// const AppContainer = () => {
//     const needLogin = useSelector((state) => !state.user.token);
//     const dispatch = useDispatch();
//     return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
//   };
  
//   export default AppContainer;
export default App
  
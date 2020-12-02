import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
import WebcamCapture from "./components/Camera"

function App() {

  return (
    <BrowserRouter>
    {/* <WebcamCapture></WebcamCapture> */}
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

            <Route exact={true} path="/">
                <h1>My Home Page</h1>
            </Route>
            <Route exact={true} path="/camera">
                <WebcamCapture></WebcamCapture>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

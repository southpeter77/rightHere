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
import { loadToken,loadCurrentUser } from "./components/store/actions/sessions/currentUser"
import Login from './components/auth/LogIn';
import NavBar from "./components/navigationBar/NavBar"
import PostFeeds from "./components/postBrowser/PostFeeds"
import Place from "./components/placeBrowser/Place"
import CreatePost from "./components/createPost/CreatePost"
import {grabAllPostsThunk} from "./components/store/actions/entities/entities"
import PlaceFeeds from "./components/placeBrowser/PlaceFeeds"
import Profile from "./components/profile/Profile"
function App({ needLogin, loadToken,loadCurrentUser }) {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        loadToken()
        loadCurrentUser();
        setLoaded(true);
        // dispatch(grabAllPostsThunk())
        //current location...........
        navigator.geolocation.getCurrentPosition((position)=>{
            window.localStorage.setItem("CURRENT_LOCATION_COORDINATES",JSON.stringify({lat: position.coords.latitude, lng: position.coords.longitude}))
          }, ()=>null)
        //customize location.........
        // window.localStorage.setItem("CURRENT_LOCATION_COORDINATES",JSON.stringify({lat: 40.7128, lng: -74.0060}))


    }, []);

    if (!loaded) {
        return null;
    }

    return (
        <CssBaseline>
            <Theme>
                <BrowserRouter>
                    <ProtectedRoute exact={true} path="/logIn" needLogin={needLogin} component={Login} />
                    <ProtectedRoute exact={true} path="/signup" needLogin={needLogin} component={SignUp} />
                    {!needLogin ? <NavBar></NavBar> : null}
                    <Switch>
                        <PrivateRoute exact path="/" needLogin={needLogin} component={PostFeeds} />
                        <PrivateRoute exact path="/place/all" needLogin={needLogin} component={PlaceFeeds}/>
                        <PrivateRoute exact path="/place/:placeId" needLogin={needLogin} component={Place} />
                        <PrivateRoute exact path="/create/post" needLogin={needLogin} component={CreatePost}/>
                        <PrivateRoute exact path="/profile/:userId" needLogin={needLogin} component={Profile}/>
                    </Switch>
                </BrowserRouter>
            </Theme>
        </CssBaseline>
    );
}

const AppContainer = () => {
    const needLogin = useSelector((state) => !state.sessions.currentToken);
    const dispatch = useDispatch();
    return <App needLogin={needLogin} loadCurrentUser={()=> dispatch(loadCurrentUser())} loadToken={() => dispatch(loadToken())} />;
};

export default AppContainer

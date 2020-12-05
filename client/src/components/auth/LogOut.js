import React from "react"
import { useDispatch, useSelector } from "react-redux";
import {logOutThunk} from "../store/actions/sessions/currentUser"

const LogOut = () => {
const dispatch = useDispatch()
const handleLogOut = ()=> {
dispatch(logOutThunk())
}

return (
    <button
    onClick={handleLogOut}
    >Log Out</button>
)

}


export default LogOut
import React,{useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import Chat from "./Chat"
import {grabRoomCurrentAndOtherThunk} from "../../components/store/actions/sessions/currentChat"
import {CURRENT_USER} from "../../components/store/actions/sessions/currentUser"
import io from 'socket.io-client'


export default function ChatBox({currentUserName, selectedUserName,currentUserId, otherUserId, showChat,setShowChat}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [loaded , setLoaded] = useState(false)
  // const room = useSelector(state => state.data.data.to_user)
  // const name = useSelector(state => state.data.data.from_user)

  // const name = useSelector(state => state.data.data.to_user)
  // const room = useSelector(state => state.data.data.from_user)

  // const roomId = useSelector(state => state.data.data.id)
  const name =currentUserName
  const room = selectedUserName
  // const room = useSelector(state=>{
  //   if (currentUserName !== state.sessions.currentRoom.from_user){
  //     return state.sessions.currentRoom.from_user
  //   } else {
  //     return state.sessions.currentRoom.to_user
  //   }
  // })
 let socket = io(process.env.REACT_APP_BASE_URL)
 const finishMessage = () => {
  // socket.on("disconnect-user");
  socket.off();
}
  const roomId=useSelector(state=>state.sessions.currentRoom.id)
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const payload = {
      currentUserId, otherUserId, currentUserName, selectedUserName
    }
    dispatch(grabRoomCurrentAndOtherThunk(payload))
    if (name && room && roomId) {
      setLoaded(true)
    }
    
}, [roomId]);

if(!loaded) {
  return null
}

  return (
    <div style={{width:'300px', height:'auto'}}>
      <Dialog
        open={showChat}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Chat name={name} room={room} id={roomId} socket ={socket}/>

        <IconButton
        style={{width:"2rem", marginLeft:"90%"}}
        onClick={()=>{
          // finishMessage()
          // setShowChat(false)
          window.location.reload()
        
        }} color="primary">
          <CancelIcon >
            
          </CancelIcon>
        </IconButton>
        {/* <button
        onClick={()=>console.log(currentUserName, selectedUserName, roomId)}
        >console</button> */}
      </Dialog>
    </div>
  );

}



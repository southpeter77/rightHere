import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './socket.css';

import io from 'socket.io-client'

import Messages from './Messages';
import InfoBar from './InfoBar';
import Input from './Input';
// import {getToUserThunk} from "../store/redux"

// let socket;
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
const Chat = ({id, name, room , socket})=> {

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    const dispatch = useDispatch();

useEffect(() =>{
    // socket = io(REACT_APP_BASE_URL);
    // dispatch(getToUserThunk(1))
  // console.log(name, room, id)
if (name && room && id) {
    socket.emit('join', { name, room,roomId:id }, (error) => {
        if(error) {
          alert(error);
        }
      });
    // return () => {
    //     socket.emit("disconnection");
    //     socket.off();
    // }
  }
}, [REACT_APP_BASE_URL, name, room, id]);

// useEffect(() => {
//     socket.on('message', message => {
//       setMessages(messages => [ ...messages, message ]);
//     })
// }, []);
useEffect(() => {
  socket.on('message', message => { // grab all messages and show on the chat box
  
    setMessages([...messages, message])
    // console.log(messages)
  })
  return () => {
    socket.off()
  }
}, [messages])

const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit(`${id}`, message, () => setMessage(''));
    }
  }



    return (
        <>
        <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
    </>
    )
}

export default Chat
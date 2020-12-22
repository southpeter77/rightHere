import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './socket.css';

import io from 'socket.io-client'

import Messages from './Messages';
import InfoBar from './InfoBar';
import Input from './Input';
// import {getToUserThunk} from "../store/redux"

let socket;
const ENDPOINTSOCKETIOD = process.env.ENDPOINTSOCKETIOD
const Chat = ({id, name, room})=> {

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    const dispatch = useDispatch();

useEffect(() =>{
    socket = io(ENDPOINTSOCKETIOD);
    // dispatch(getToUserThunk(1))
  console.log(name, room, id)
if (name && room && id) {
    socket.emit('join', { name, room,roomId:id }, (error) => {
        if(error) {
          alert(error);
        }
      });
    return () => {
        socket.emit("disconnection");
        socket.off();
    }
  }
}, [ENDPOINTSOCKETIOD, name, room, id]);

// useEffect(() => {
//     socket.on('message', message => {
//       setMessages(messages => [ ...messages, message ]);
//     })
// }, []);
useEffect(() => {
  socket.on('message', message => {
    setMessages([...messages, message])
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
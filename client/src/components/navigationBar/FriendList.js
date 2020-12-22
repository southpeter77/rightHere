import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import MessageIcon from '@material-ui/icons/Message';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ChatBox from "../chatting/ChatBox"
import {CURRENT_USER} from "../../components/store/actions/sessions/currentUser"

const ITEM_HEIGHT = 48;

export default function LongMenu({allFriends,friendList, open, handleClose, handleClick}) {
const [showChat, setShowChat] = useState(false)
const [fromUserId, setFromUserId] = useState('')
const [toUserId, setToUserId] = useState('')
const [selectedUserName, setSelectedUserName] = useState('')
const currentUser = JSON.parse(window.localStorage.getItem(CURRENT_USER))
const currentUserId = currentUser.userId
const [otherUserId, setOtherUserId] = useState("")
const currentUserName = currentUser.firstName +" " + currentUser.lastName
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  return (
    <div>
      {/* <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton> */}
      <Menu
        id="long-menu"
        anchorEl={friendList}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '40ch',
          },
        }}
      >
        {allFriends.map((each) => (
          <MenuItem>
        {each.from 
        ?
        <div style={{display:"flex", justifyContent:"space", alignItems:"center"}}>
        <Avatar
       src={each.from.Photos[0].url}
            style={{marginRight:"10%"}}
        >
        </Avatar>
        <Typography>
          {each.from.firstName} {each.from.lastName}
        </Typography>
        <IconButton
                     onClick={()=>{
                      setShowChat(true)
                      setFromUserId(each.from_user_id)
                      setToUserId(each.to_user_id)
                      setSelectedUserName(each.from.firstName +' '+each.from.lastName)

                        setOtherUserId(each.from.id)
                        handleClose()
                    }}
        >
            <MessageIcon></MessageIcon>
        </IconButton>
        </div>
        :
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Avatar
       src={each.to.Photos[0].url}
       style={{marginRight:"10%"}}
        >
        </Avatar>
        <Typography>
          {each.to.firstName} {each.to.lastName}
        </Typography>
        <IconButton
                onClick={()=>{
                  setShowChat(true)
                  setFromUserId(each.from_user_id)
                  setToUserId(each.to_user_id)
                  setSelectedUserName(each.to.firstName +' '+each.to.lastName)
                  setOtherUserId(each.to.id)
                  handleClose()
                }}
        >
            <MessageIcon></MessageIcon>
        </IconButton>
        </div>
    }
          </MenuItem>
        ))}
      </Menu>


      {showChat && <ChatBox currentUserName={currentUserName} selectedUserName={selectedUserName} currentUserId={currentUserId} otherUserId={otherUserId} showChat={showChat} setShowChat={setShowChat}></ChatBox> }
    </div>
  );
}
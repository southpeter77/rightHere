import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import MessageIcon from '@material-ui/icons/Message';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function LongMenu({allFriends,friendList, open, handleClose, handleClick}) {

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
        <IconButton>
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
        <IconButton>
            <MessageIcon></MessageIcon>
        </IconButton>
        </div>
    }
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
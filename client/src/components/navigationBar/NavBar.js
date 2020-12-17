import React, { useState,useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
// import { loadCurrentUser } from "../store/actions/sessions/currentUser"
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../store/actions/sessions/currentUser"
import navBarStyling from "./navBarStyling.css"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ExploreIcon from '@material-ui/icons/Explore';
import {CURRENT_USER} from "../store/actions/sessions/currentUser"
import Search from "./SeachLocation"
import { NotificationImportant } from '@material-ui/icons';
import {grabAllFriendsByUserIdThunk} from "../../components/store/actions/sessions/currentUser"
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(20),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

}));

const NavBar = () => {
  const [profileUrl, setProfilUrl] = useState("")
  const data = JSON.parse(window.localStorage.getItem(CURRENT_USER))
  const currentUserData = useSelector(state => state.sessions.currentUser)
  const relationships = useSelector(state => state.sessions.relationships)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(grabAllFriendsByUserIdThunk(data.userId))
}, []);

  const handleLogOut = () => {
    dispatch(logOutThunk())
  }


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={()=>{window.location.href=`/profile/${JSON.parse(window.localStorage.getItem(CURRENT_USER)).userId}`}}>Profile</MenuItem> */}
      <MenuItem onClick={()=>{window.location.href=`/myprofile`}}>Profile</MenuItem>
      
      
      <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit"
      
        >
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLUBcjuBarUfvgSfYoD-fqE0dV9mWlOu6aQ&usqp=CAU"
            // src={currentUserData.photos.length >0? currentUserData.photos[0].url: null}
            src={currentUserData.photos.length> 0 ? currentUserData.photos[0].url : null}
          />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="none" elevation={1}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}

          <div 
          style={{ cursor: "pointer" }} 
          onClick={() => window.location.href = "/"}>
            <img src="/rightHereLogo.png" className="navBarLogo"></img>
            </div>
          <IconButton
            onClick={() => window.location.href = "/create/post"}
          >
            <AddAPhotoIcon
              color="secondary"
              fontSize="large"
            ></AddAPhotoIcon>
          </IconButton>
          <IconButton
          onClick={() => window.location.href = "/place/all"}
          >
            <ExploreIcon
              color="secondary"
              fontSize="large"
            ></ExploreIcon>
          </IconButton>

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
              <Search></Search> */}



          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           <Tooltip title="New friend requests">

          
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={
                relationships.filter(each=>{
                  if (each.from_user_id !== currentUserData.id && each.pending == true){
                    return each
                  }
                }).length
              } color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
 </Tooltip>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLUBcjuBarUfvgSfYoD-fqE0dV9mWlOu6aQ&usqp=CAU"
                src={currentUserData.photos.length> 0 ? currentUserData.photos[0].url : null}

                style={{ width: '30pt', height: '30pt' }}
              />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


export default NavBar
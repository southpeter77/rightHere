import React, { useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import IconButton from '@material-ui/core/IconButton';
// import ExploreIcon from '@material-ui/icons/Explore';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        justifyContent:'space-around'
    },
    underLine:{
        textDecoration:"underline"
    }

  }));

const ProfileNavBar = ({setShowPosts, setShowPlaces, setShowFriendList, showPosts, showPlaces, showFriendList}) => {
    const classes = useStyles();


    return (
<Grid className={classes.root}>

   {showPosts ?  <IconButton
    onClick={()=>{
        setShowPosts(true)
        setShowPlaces(false)
        setShowFriendList(false)
    }}
    >
 <Typography variant="subtitle1" 
 component="subtitle1" 
 color="primary" 
 style={{fontWeight:"bold", textDecoration:"underline"}}>View Posts</Typography>
    </IconButton> : <IconButton
    onClick={()=>{
        setShowPosts(true)
        setShowPlaces(false)
        setShowFriendList(false)
    }}
    >
 <Typography variant="subtitle1" component="subtitle1">View Posts</Typography>
    </IconButton>}



    {showPlaces ? <IconButton onClick={()=>{
            setShowPosts(false)
            setShowPlaces(true)
        setShowFriendList(false)}}>
<Typography variant="subtitle1" 
component="subtitle1" 
color="primary" 
style={{fontWeight:"bold", textDecoration:"underline"}}>View Places</Typography>
    </IconButton> :
    <IconButton onClick={()=>{
        setShowPosts(false)
        setShowPlaces(true)
    setShowFriendList(false)}}>
<Typography variant="subtitle1" component="subtitle1">View Places</Typography>
</IconButton>}



    {showFriendList ? <IconButton
    onClick={()=>{
// console.log("friend list")
setShowFriendList(true)
setShowPosts(false)
setShowPlaces(false)
    }}
    >
 <Typography variant="subtitle1" 
 component="subtitle1" color="primary" 
 style={{fontWeight:"bold", textDecoration:"underline"}}>View Friends</Typography>
    </IconButton> : 
        <IconButton
        onClick={()=>{
    // console.log("friend list")
    setShowFriendList(true)
    setShowPosts(false)
    setShowPlaces(false)
        }}
        >
     <Typography variant="subtitle1" component="subtitle1">View Friends</Typography>
        </IconButton>}


</Grid>
    )
};
export default ProfileNavBar;
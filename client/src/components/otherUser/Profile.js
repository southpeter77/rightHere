import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
// import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import AddBoxIcon from '@material-ui/icons/AddBox';
// import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
import CardActions from '@material-ui/core/CardActions';
// import CardHeader from '@material-ui/core/CardHeader';
import ProfileNavBar from "./ProfileNavBar"
import PlaceCard from "./PlaceCard"
import { grabUserInformationByUserIdThunk } from "../../components/store/actions/entities/entities"
import PostCard from "./PostCard"
// import CancelIcon from '@material-ui/icons/Cancel';
import {grabAllLikes} from "../store/actions/like"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import {addFriend} from "../store/actions/relationship"
const styles = makeStyles((theme) => ({
    feed: {
        padding: '2px 4px',
        alignItems: 'center',
        width: 730,
        marginTop: "5%",
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '3%'
    },
    paper: {
        // maxWidth: 750,
        margin: 'auto',
        marginTop: "5%",
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'center',
    },
    profile: {
        padding: '2px 4px',
        alignItems: 'center',
        width: 350,
        position: "fixed",
    }, profileButton: {
        alignItems: 'right',
        width: 30,
        marginLeft: '20%',
        marginTop: '1%',
        position: "fixed",
    },
    iconButton: {
        padding: 10,
    },
    sticky: {
        background: 'white',
        position: '-webkit-sticky',
        position: 'fixed',
        left: '10%',
        top: '80px',
        bottom: 0,
        // paddingTop: '40px',
        // paddingBottom: '40px',
        zIndex: 5,
    },
    expand: {
        // transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        // transform: 'rotate(180deg)',
    },
    card:{
        marginTop:'3%'
    },

}));


const PostFeeds = () => {
    const classes = styles()
    const dispatch = useDispatch()
    const userId =useParams().id
    const userData = useSelector(state => state.entities.otherUser)
    const currentUserData = JSON.parse(window.localStorage.getItem(CURRENT_USER))
    const [showPlaces, setShowPlaces] = useState(false)
    const [showPosts, setShowPosts] = useState(true)
    const [showProfilePopUp, setShowProfilePopUp] = useState(true)
    const [expanded, setExpanded] = useState(false);
    const [showPhotoEdit, setShowPhotoEdit] = useState(false)
    const [showBioEdit, setShowBioEdit] = useState(false)
    const [showFriendList, setShowFriendList] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        dispatch(grabUserInformationByUserIdThunk(userId))
        setLoaded(true)
    }, []);

const handleAddFriend = (otherUserId) => {
    const payload = {
        currentUserId: currentUserData.userId,
        otherUserId
    }
console.log(payload)
// dispatch(addFriend(payload))
}


    
    if (!loaded) {
        return null
    }
    return (
        <>

            <Paper className={classes.paper} elevation={0}>
{/* <button onClick={()=>console.log(userData)}>asdfasdf</button> */}
                <Card elevation={0} className={classes.card}>
                    <Avatar
                    style={{ width: '130pt', height: '130pt', margin:"auto" }}
                    src={userData.Photos[0].url}
                    >

                </Avatar>



                <Typography 
                align="center"
                variant="h6"
                >
                    {`${userData.firstName} ${userData.lastName}`} 
                    <Tooltip title={`Add ${userData.firstName} to your friend`} placement="right">
                    <IconButton
                    onClick={()=>handleAddFriend(userData.id)}
                    ><PersonAddIcon></PersonAddIcon></IconButton>
                    </Tooltip> 
{/*                     
                    <Tooltip title={`You are friend with ${userData.firstName}`} placement="right">
                        <IconButton><PersonIcon style={{color:"green"}}></PersonIcon></IconButton>
                    </Tooltip> */}
                    

                    
                    </Typography>
                
                <Typography 
                align="center"
                variant="h6"
                >
                    {userData.email}
                </Typography>
                    <Typography align="center" variant="body1" >
                                    {userData.biography}
                                </Typography>

                               
                                <Typography align="center" variant="body2" style={{ color: "gray"}}>{`Posts ${userData.Posts.length} Places ${userData.Places.length}`}</Typography>
                                <ProfileNavBar setShowPosts={setShowPosts} setShowPlaces={setShowPlaces} setShowFriendList={setShowFriendList} showPosts={showPosts} showPlaces={showPlaces} showFriendList={showFriendList}></ProfileNavBar> 

                </Card>
                <Grid container style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>    

               
                            {showPlaces ? userData.Places.map(each =>
                                <PlaceCard data={each}></PlaceCard>
                            ) : null}
                            {showPosts ? userData.Posts.map(each => <PostCard data={each} thisUserId={userId}/>) : null}
</Grid>
            </Paper>
        </>
    )
}


export default PostFeeds;
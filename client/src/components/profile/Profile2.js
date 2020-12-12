import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import ProfileNavBar from "./ProfileNavBar"
import PlaceCard from "./PlaceCard"
import { grabAllPostsByUserIdThunk, grabAllPlacesByUserIdThunk } from "../../components/store/actions/entities/entities"
import PostCard from "./PostCard"
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import EditProfile from "./EditProfile"
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import {grabAllLikes} from "../store/actions/like"


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
    const data = JSON.parse(window.localStorage.getItem(CURRENT_USER))
    const places = Object.values(useSelector(state => state.entities.places.byId))
    const posts = Object.values(useSelector(state => state.entities.posts.byId))
    const [showPlaces, setShowPlaces] = useState(false)
    const [showPosts, setShowPosts] = useState(true)
    const [showProfilePopUp, setShowProfilePopUp] = useState(true)
    const [expanded, setExpanded] = useState(false);
    const [showPhotoEdit, setShowPhotoEdit] = useState(false)
    const [showBioEdit, setShowBioEdit] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    useEffect(() => {
        dispatch(grabAllPlacesByUserIdThunk(data.userId))
        dispatch(grabAllPostsByUserIdThunk(data.userId))
        dispatch(grabAllLikes())

    }, []);
    // console.log(posts)
    return (
        <>

            <Paper className={classes.paper} elevation={0}>
{/* <button onClick={()=>console.log(places)}>asdfasdf</button> */}
                <Card elevation={0} className={classes.card}>
                    <Avatar
                    style={{ width: '130pt', height: '130pt', margin:"auto" }}
                    src={data.photos.length > 0 ? data.photos[0].url : null}
                    >

                </Avatar>

                            <CardActions        
                        style={{marginRight:"-12pt"}}

                                >
                        <IconButton
                        // style={{marginRight:"0pt"}}
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={()=>{handleExpandClick()
                                    setShowBioEdit(false)
                                    if(!showPhotoEdit){
                                        setShowPhotoEdit(true)
                                    }
                                    }}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <InsertPhotoIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}


                                    onClick={()=>{handleExpandClick()
                                        setShowPhotoEdit(false)
                                        if(!showBioEdit){
                                            setShowBioEdit(true)
                                        }
                                    }}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <EditIcon />
                                </IconButton>


                            </CardActions>

                



                <Typography 
                align="center"
                variant="h6"
                >{`${data.firstName} ${data.lastName}`}</Typography>
                
                <Typography 
                align="center"
                variant="h6"
                >{data.email}</Typography>
                    <Typography align="center" variant="body1" >
                                    {data.biography}
                                </Typography>

                               
                                <Typography align="center" variant="body2" style={{ color: "gray"}}>{`Posts ${posts.length} Places ${places.length}`}</Typography>
                                <ProfileNavBar setShowPosts={setShowPosts} setShowPlaces={setShowPlaces}></ProfileNavBar>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <EditProfile showBioEdit={showBioEdit} showPhotoEdit={showPhotoEdit} setShowPhotoEdit={setShowPhotoEdit} setShowBioEdit={setShowBioEdit}></EditProfile>
                                </CardContent>
                            </Collapse>         

                </Card>
                <Grid container style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>    

               
                            {showPlaces ? places.map(each =>
                                <PlaceCard data={each}></PlaceCard>
                            ) : null}
                            {showPosts ? posts.map(each => <PostCard data={each} />) : null}
</Grid>
                {/* <Grid container>    
                    <Grid item>
                        <ProfileNavBar setShowPosts={setShowPosts} setShowPlaces={setShowPlaces}></ProfileNavBar>
                        <Card className={classes.feed}>
                            {showPlaces ? places.map(each =>
                                <PlaceCard data={each}></PlaceCard>
                            ) : null}
                            {showPosts ? posts.map(each => <PostCard data={each} />) : null}
                        </Card>

                    </Grid>
                    <Grid item>
                        {showProfilePopUp ? <Card className={classes.profile}>

                            />
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={4}
                                        align="right">
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="body2"
                                            align="right"
                                            style={{ color: "gray" }}
                                        >Posts
              </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="body2"
                                            align="right"
                                            style={{ color: "gray" }}
                                        >Place</Typography>
                                    </Grid>
                                    <Grid item xs={4} align="center"></Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="body2"
                                            align="right"
                                        >{data.posts.length}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="body2"
                                            align="right"
                                        >{data.places.length}
                                        </Typography>
                                    </Grid>
                                </Grid>



                                <Typography variant="body1" color="textSecondary" component="p">
                                    {data.biography}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={()=>{handleExpandClick()
                                    setShowBioEdit(false)
                                    if(!showPhotoEdit){
                                        setShowPhotoEdit(true)
                                    }
                                    }}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <InsertPhotoIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={()=>{handleExpandClick()
                                        setShowPhotoEdit(false)
                                        if(!showBioEdit){
                                            setShowBioEdit(true)
                                        }
                                    }}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <EditIcon />
                                </IconButton>


                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <EditProfile showBioEdit={showBioEdit} showPhotoEdit={showPhotoEdit} setShowPhotoEdit={setShowPhotoEdit} setShowBioEdit={setShowBioEdit}></EditProfile>
                                </CardContent>
                            </Collapse>
                        </Card> : <Button className={classes.profileButton} onClick={() => setShowProfilePopUp(true)}>View</Button>}
                    </Grid>
                </Grid> */}
            </Paper>
        </>
    )
}


export default PostFeeds;

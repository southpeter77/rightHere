import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import { Redirect,useParams } from "react-router-dom"
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ImageGridList from "./CreatePostIntro"
import Camera from "../Camera"
const styles = makeStyles((theme) => ({
    paper: {
        maxWidth: 750,
        margin: 'auto',
        marginTop:"5%",
        display:"flex",
        // flexDirection:"column",
        justifyContent:'center'

    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));



const CreatePost = () => {
    const classes = styles()
    const dispatch = useDispatch()
    const [showGallery, setShowGallery]=useState(true)
    const [showCamera, setShowCamera] = useState(false)
    useEffect( () => {

    }, []);

    return (
        <>

            <Paper className={classes.paper} elevation={1}>
            {showCamera? <Camera></Camera> : null}
            {showGallery?<Grid container
        spacing={0}
        alignItems="center"
        display="flex"
        justify="center"
        style={{ minHeight: "100vh" }}>
            
        <Grid item xs={false} sm={12} md={4} elevation={3} style={{margin:'auto', display:"flex", justifyContent:"center"}}>
            
        <IconButton 
        onClick={()=>{
            setShowGallery(!showGallery)
            setShowCamera(!showCamera)
        }}
        >
            <CameraAltIcon fontSize="large"/>
            <Typography variant="subtitle1" component="subtitle1">Take a picture</Typography>
            </IconButton>
        </Grid>
        <Grid item xs={false} sm={12} md={4} elevation={3} style={{margin:'auto', display:"flex", justifyContent:"center"}}>

        <IconButton><AddCircleIcon fontSize="large"/>
                 <Typography variant="subtitle1" component="subtitle1">add picture from your device</Typography>   
            
        </IconButton>
        </Grid>
        {/* <img src="/uploadPicture.jpg" style={{maxWidth:"700px"}}></img> */}
        <ImageGridList></ImageGridList>
        </Grid> : null}
            </Paper>
        </>
    )
}


export default CreatePost;
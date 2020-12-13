import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import AddBoxIcon from '@material-ui/icons/AddBox';
// import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
// import { Redirect, useParams } from "react-router-dom"
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ImageGridList from "./CreatePostIntro"
import Camera from "../Camera"
import UploadImage from "./UploadImage"
import Map from "./Map"
import CreatePlaceForm from "../createPlace/CreatePlaceForm"
import CreatePostForm from "./CreatePostForm"
import { checkPlaceExistThunk } from "../../components/store/actions/ui/ui"
import { currentLocationCoordinatesThunk, CURRENT_LOCATION_COORDINATES } from "../../components/store/actions/sessions/currentUser"
const styles = makeStyles((theme) => ({
    paper: {
        maxWidth: 750,
        margin: 'auto',
        marginTop: "5%",
        display: "flex",
        // flexDirection:"column",
        justifyContent: 'center'

    },
    containerRoot: {
        margin: theme.spacing(5, 2),
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: "center",
    },
    iconButton: {
        padding: 10,
    },
}));



const CreatePost = () => {
    const classes = styles()
    const dispatch = useDispatch()
    const [showGallery, setShowGallery] = useState(true)
    const [showCamera, setShowCamera] = useState(false)
    const [showUpload, setShowUpload] = useState(false)
    // const [placeExist, setPlaceExist] = useState(false)
    const currentCoordinates = JSON.parse(window.localStorage.getItem(CURRENT_LOCATION_COORDINATES))
    const placeExist = useSelector(state => state.ui.checkPlaceExist)
    const [image, setImage] = useState(null)
    useEffect(() => {
        ////THIS IS FOR CURRENT LOCATION///////

        dispatch(checkPlaceExistThunk(currentCoordinates))
        dispatch(currentLocationCoordinatesThunk(currentCoordinates))
        //////

    }, []);
    // console.log("current coordinates", currentCoordinates)
    return (
        <>
            {showUpload && !placeExist &&
                <>
                    <UploadImage setShowUpload={setShowUpload} setShowGallery={setShowGallery} setImage={setImage}></UploadImage>
                    <Grid container className={classes.containerRoot}>
                        <Grid item xs={12} sm={12} md={6} elevation={4} >
                            <Map coordinates={currentCoordinates}></Map>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} elevation={4}>
                            <CreatePlaceForm currentCoordinates={currentCoordinates} image={image}></CreatePlaceForm>
                        </Grid>
                    </Grid>
                </>}
                {showUpload && placeExist &&
                <>
                    <UploadImage setShowUpload={setShowUpload} setShowGallery={setShowGallery} setImage={setImage}></UploadImage>
                    {/* <Grid container className={classes.containerRoot}> */}
                            <CreatePostForm currentCoordinates={currentCoordinates} image={image}></CreatePostForm>
                    {/* </Grid> */}
                </>}

            <Paper className={classes.paper} elevation={1}>
                {showCamera ? <Camera setShowCamera={setShowCamera} setShowGallery={setShowGallery}></Camera> : null}
                {showGallery ? <Grid container
                    spacing={0}
                    alignItems="center"
                    display="flex"
                    justify="center"
                    style={{ minHeight: "100vh" }}>

                    <Grid item xs={false} sm={12} md={4} elevation={3} style={{ margin: 'auto', display: "flex", justifyContent: "center" }}>

                        <IconButton
                            onClick={() => {
                                setShowGallery(false)
                                setShowCamera(true)
                            }}
                        >
                            <CameraAltIcon fontSize="large" />
                            <Typography variant="subtitle1" component="subtitle1">Take a picture</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item xs={false} sm={12} md={4} elevation={3} style={{ margin: 'auto', display: "flex", justifyContent: "center" }}>

                        <IconButton
                            onClick={() => {
                                setShowGallery(false)
                                setShowUpload(true)
                            }}
                        ><AddCircleIcon fontSize="large" />
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
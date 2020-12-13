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
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import CreatePostIntro from "./CreatePostIntro"
import Camera from "../Camera"
import UploadImage from "./UploadImage"
import Map from "./Map"
import CreatePlaceForm from "../createPlace/CreatePlaceForm"
import CreatePostForm from "./CreatePostForm"
// import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import style from "./style.css"
// import CardContent from '@material-ui/core/CardContent';
import { checkPlaceExistThunk } from "../../components/store/actions/ui/ui"
import { currentLocationCoordinatesThunk, CURRENT_LOCATION_COORDINATES } from "../../components/store/actions/sessions/currentUser"
import Zoom from '@material-ui/core/Zoom';
// import Grow from '@material-ui/core/Grow';
import CircularProgress from '@material-ui/core/CircularProgress';
import CreatePostFormCamera from "./CreatePostFormCamera"
const styles = makeStyles((theme) => ({
    paper: {
        // maxWidth: 750,
        margin: 'auto',
        // marginTop: "5%",
        display: "flex",
        // height: '100vh',
        // flexDirection:"column",
        justifyContent: 'center'

    },
    root: {
        width: 330,
        height: 330,
        borderRadius: '20pt',
        margin: 10,
        border: '2pt solid black',
        marginTop: "5%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    }, modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(0)",
        transition: "500ms ease-in-out",
        border: "1px solid black",
        borderRadius: "2px",
        backgroundColor: "white",
        width: "500px",
        maxWidth: "80%",
        zIndex: "10",
        maxHeight: "400pt"

    }, modalActive: {
        position: "fixed",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(0)",
        transition: "500ms ease-in-out",
        border: "1px solid lightgray",
        borderRadius: "2px",
        backgroundColor: "white",
        width: "480px",
        maxWidth: "80%",
        zIndex: "10",
        transform: "translate(-50%, -50%) scale(1)",
        height: "480pt",
        display: "flex", /*added*/
        flexDirection: "column", /*added*/
        borderRadius: "20pt"
    }, paper2: {
        margin: theme.spacing(1),
    },spinning: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
    }

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
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const handleCamera = () => {
        setShowCamera((prev) => !prev);
    };

    const handleUpload = () => {
        setShowUpload((prev) => !prev);
    };
    useEffect(() => {
        ////THIS IS FOR CURRENT LOCATION///////

        dispatch(checkPlaceExistThunk(currentCoordinates))
        dispatch(currentLocationCoordinatesThunk(currentCoordinates))
        redirecting()
        //////

    }, []);
    const redirecting = () => {
        if (!currentCoordinates){
            setTimeout(()=>{
                window.location.href="/create/post"
            }, 1500)
            
        }
    }

    if(!currentCoordinates) {
        return  <Paper style={{marginTop:"5%", display:'flex', justifyContent:"center"}} elevation={1}>
            <h1>loadings</h1>
            <div className={classes.spinning}>
      <CircularProgress />
    </div>
        </Paper>
    }

    return (
        <>

   <Map coordinates={currentCoordinates}></Map>
            <Paper className={classes.paper} elevation={1}>
             
                <Card className={classes.root}>

                    <IconButton
                        onClick={handleCamera}
                    >
                        <CameraAltIcon
                            style={{ height: "70pt", width: '70pt' }}
                        ></CameraAltIcon>
                        <Typography>Take a Photo</Typography>
                    </IconButton>

                </Card>

                <Card className={classes.root}>
                    <IconButton
                        onClick={handleUpload}
                    >
                        <CloudUploadIcon
                            style={{ height: "70pt", width: '70pt' }}
                        ></CloudUploadIcon>
                        <Typography>Upload a Photo</Typography>
                    </IconButton>
                </Card>

            </Paper>
            <Zoom in={showCamera}>
                <Paper elevation={4}>

                    <div className={classes.modalActive} id="modal">
                        {!placeExist ? <>
                            <Camera setShowCamera={setShowCamera} setShowGallery={setShowGallery} setImage={setImage}></Camera>
                            <Grid container className={classes.containerRoot}>
                                <CreatePlaceForm currentCoordinates={currentCoordinates} image={image}></CreatePlaceForm>
                            </Grid>
                        </>
                            :
                            <>
                                <Camera setShowCamera={setShowCamera} setShowGallery={setShowGallery} setImage={setImage}></Camera>
                                <Grid container className={classes.containerRoot}>
                                    <CreatePostFormCamera currentCoordinates={currentCoordinates} image={image}></CreatePostFormCamera>     </Grid>
                            </>
                        }

                    </div>

                    <div id="overlay"></div>




                </Paper>
            </Zoom>
            <Zoom in={showUpload}>
                <Paper elevation={4}>

                    <div className={classes.modalActive} id="modal">
                        {!placeExist ? <>
                            <UploadImage setShowUpload={setShowUpload} setShowGallery={setShowGallery} setImage={setImage}></UploadImage>
                            <Grid container className={classes.containerRoot}>
                                <CreatePlaceForm currentCoordinates={currentCoordinates} image={image}></CreatePlaceForm>
                            </Grid>
                        </>
                            :
                            <>
                                <UploadImage setShowUpload={setShowUpload} setShowGallery={setShowGallery} setImage={setImage}></UploadImage>
                                <Grid container className={classes.containerRoot}>
                                    <CreatePostForm currentCoordinates={currentCoordinates} image={image}></CreatePostForm>     </Grid>
                            </>
                        }

                    </div>

                    <div id="overlay"></div>




                </Paper>
            </Zoom>
        </>
    )
}


export default CreatePost;
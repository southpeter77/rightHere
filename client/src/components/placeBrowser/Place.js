import React,{useState, useEffect} from "react"
import Map from "./Map"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import {grabPlaceByIdThunk} from "../store/actions/entities/entities"
import { useParams } from "react-router-dom";
import Gallery from "./Gallery"
import Typography from '@material-ui/core/Typography';
import SwipeAbleContainer from "./swipeableCarousel/SwipeAble"

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      // margin: theme.spacing(5),
      margin: theme.spacing(5, 30)
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(5, 2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '80%', // Fix IE 11 issue.
      margin: theme.spacing(5),
    },
    submit: {
      width: "100%",
      margin: theme.spacing(1, 0, 2),
    },
    paper: {
        maxWidth: 850,
        margin: 'auto',
        marginTop:"5%"

    },
  }));

const Place = () => {
    const classes = useStyles()
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch()
    const {placeId} = useParams()
    const data = useSelector((state)=>state.entities.places)
    // dispatch(grabPlaceByIdThunk(placeId))

    useEffect(()=> {
    dispatch(grabPlaceByIdThunk(placeId))

    },[])

    return (
        <>
            <Paper className={classes.paper} elevation={1}>
                <Typography
                variant="h4"
                component="h4"
                style={{color:"gray"}}
                >{`@${data.byId.name}`}</Typography>
            {/* <Gallery data={data}></Gallery>
             */}
            {/* <Map></Map> */}
            <SwipeAbleContainer data={data}></SwipeAbleContainer>
           
 <Grid container>
 <CssBaseline />
 <Grid container
        spacing={0}
        // alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}  >


        <Grid item xs={false} sm={12} md={4} elevation={0} >
    {/* <Map></Map> */}
    </Grid>
    <Grid item xs={false} sm={6} md={6}  elevation={1} square >
    </Grid>
    </Grid>

    </Grid>
    </Paper>

    </>
    )

  
}

export default Place
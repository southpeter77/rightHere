import React,{useState, useEffect} from "react"
import Map from "./Map"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import {grabPlaceByIdThunk, grabPostsByPlaceIdThunk,GRAB_PLACE_BY_ID} from "../store/actions/entities/entities"
import { useParams } from "react-router-dom";
import Gallery from "./Gallery"
import Typography from '@material-ui/core/Typography';
import SwipeAbleContainer from "./swipeableCarousel/SwipeAble"
import Preview from "./swipeableCarousel/Previews"
import mapCss from "./mapCss.css"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      // margin: theme.spacing(5),
      margin: theme.spacing(5, 30)
    },
    root2: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    gridList: {
      width: 850,
      height: 500,
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
    const data = useSelector((state)=>state.entities.places.byId)
    const id = Number(placeId)
    // const data2= JSON.parse(window.localStorage.getItem(GRAB_PLACE_BY_ID))

    useEffect(()=> {
   dispatch(grabPlaceByIdThunk(placeId))
   dispatch(grabPostsByPlaceIdThunk(placeId))
      // setLoaded(true)
    },[])
  // if(!loaded) {
  //   return null
  // }    

    return (
        <>
            <Paper className={classes.paper} elevation={1}>
      <button onClick={()=>console.log(data.coordinates)}>console1</button>
      {/* <button onClick={()=>console.log(data2)}>console2</button> */}
      {/* <Typography
                variant="h4"
                component="h4"
                style={{color:"gray"}}
                >{`@${data.name}`}
                </Typography> */}
<Typography
                variant="h4"
                component="h4"
                style={{color:"gray"}}
                >{`@${data.name}`}
                </Typography>
                            <Typography
                variant="h6"
                component="h6"
                style={{color:"gray"}}
                ><img src="/crown.png" style={{width:"20pt", height:"auto"}}></img>{`${data.User.firstName}`}</Typography>
            {/* <Gallery data={data}></Gallery>
             */}
            
            <Grid container>
        <Grid item xs={12} sm={12} md={6} elevation={0} style={{display:"flex", alignItems:"center"}}>
        <SwipeAbleContainer data={data}></SwipeAbleContainer>
        </Grid>
        <Grid item xs={12} sm={12} md={3} elevation={0}>
        <Map coordinates={data.coordinates}></Map>
        </Grid>
        <Preview data={data}images={data.photos.map(each=>each.url)} names={data.photos.map(each=>each.name)}></Preview>
            {/* <SwipeAbleContainer data={data}></SwipeAbleContainer>
            <Preview data={data}images={data.photos.map(each=>each.url)} names={data.photos.map(each=>each.name)}></Preview>
            <Map coordinates={data.coordinates}></Map> */}
            {/* <div className='parentContainer'>
            <div className='leftTopContainer'></div>
            <div className='leftBottomContainer'></div>
            <div className='rightContainer'></div>
            </div> */}
             {/* <div className={classes.root2}> */}
      {/* <GridList cellHeight={100} className={classes.gridList} cols={2}>
            <GridListTile cols={1} style={{width:'400pt' ,height: '300pt'}}>
            <SwipeAbleContainer data={data}></SwipeAbleContainer>
            </GridListTile>
            <GridListTile cols={2} style={{width:'200pt' ,height: '600pt'}}>
            <Preview data={data}images={data.photos.map(each=>each.url)} names={data.photos.map(each=>each.name)}></Preview>
            </GridListTile>
            <GridListTile cols={1} style={{width:'400pt' ,height: '300pt'}}>
            <Map coordinates={data.coordinates}></Map>
            </GridListTile>
      </GridList> */}
    {/* </div> */}

            </Grid>
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
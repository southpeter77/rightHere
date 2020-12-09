import React, { useState, useEffect } from "react"
import Map from "./Map"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { grabPlaceByIdThunk, grabPostsByPlaceIdThunk, GRAB_PLACE_BY_ID } from "../store/actions/entities/entities"
import { useParams } from "react-router-dom";
import Gallery from "./Gallery"
import Typography from '@material-ui/core/Typography';
import SwipeAbleContainer from "./swipeableCarousel/SwipeAble"
import Preview from "./swipeableCarousel/Previews"
import mapCss from "./mapCss.css"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PostCard from "./PostCard"
import Gallery2 from "./Gallery2"
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import MapIcon from '@material-ui/icons/Map';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    // margin: theme.spacing(5),
    margin: theme.spacing(5, 30)
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '5%',
    backgroundColor: theme.palette.background.paper,
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
    marginTop: "5%"

  },
}));

const Place = () => {
  const classes = useStyles()
  const [openSwipeable, setOpenSwipeable] = useState(false)
  const dispatch = useDispatch()
  const { placeId } = useParams()
  const data = useSelector((state) => state.entities.places.byId)
  const id = Number(placeId)
  const [showMap, setShowMap] = useState(false)
  // const data2= JSON.parse(window.localStorage.getItem(GRAB_PLACE_BY_ID))

  useEffect(() => {
    dispatch(grabPlaceByIdThunk(placeId))
    dispatch(grabPostsByPlaceIdThunk(placeId))
    // setLoaded(true)
  }, [])
  // if(!loaded) {
  //   return null
  // }    

  return (
    <>
      {/* <SwipeAbleContainer data={data}></SwipeAbleContainer> */}
      {showMap ? <div className="popup">
        <div className="popup-content">
          <Map coordinates={data.coordinates}></Map>
          <IconButton
            onClick={() => setShowMap(false)}
            style={{
              height: "55px",
              width: "30px",
              color: "white",
              fontSize: "10pt",
              cursor: "pointer",
              right: '30%',
            }} fontSize="large">
            <CancelIcon />
          </IconButton></div>

      </div> : null}
      {openSwipeable ? <SwipeAbleContainer data={data} setOpenSwipeable={setOpenSwipeable}></SwipeAbleContainer> : null}
      <Paper className={classes.paper} elevation={1}>
        <button onClick={() => console.log(data)}>console1</button>
        {/* <button onClick={()=>console.log(data2)}>console2</button> */}
        {/* <Typography
                variant="h4"
                component="h4"
                style={{color:"gray"}}
                >{`@${data.name}`}
                </Typography> */}
        <Typography variant="h4"
          component="h4"
          style={{ color: "gray", borderBottom: '1px solid gray', width: "96%", margin: "auto" }}
        >{`@${data.name}`}

          {/* <Typography 
        variant="subtitle1" 
        component="subtitle1" 
        style={{marginLeft:"5%"}}>{`${data.description}`}
        </Typography> */}
        </Typography>
        <CardHeader
          avatar={
            <Avatar
              src={data.User.Photos[0].url}

            >

            </Avatar>
          }

          title={<Typography
            variant="h6"
            component="h6"
            style={{ color: "gray", width: "96%", margin: "auto" }}
          ><img src="/crown.png" style={{ width: "20pt", height: "auto" }}></img>{`${data.User.firstName}`}</Typography>}
          subheader={data.description}
        />
        {/* 
         */}
        <Typography
          align="right"
          variant="h6"
          component="h6"
          style={{ color: "gray", marginRight: "30pt" }}
        >Total Posts: {`${data.posts.length}`}</Typography>
        <Typography
          onClick={() => setShowMap(true)}
          align="right"
          variant="subtitle1"
          style={{ color: "gray", marginRight: "30pt", cursor: "pointer" }}
        >View Map<MapIcon/></Typography>
        {/* <Gallery data={data}></Gallery>
             */}

        <Grid container>
          {/* <Grid item xs={12} sm={12} md={6} elevation={0} style={{ display: "flex", alignItems: "center" }}>
            <SwipeAbleContainer data={data}></SwipeAbleContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={3} elevation={0}>
            <Map coordinates={data.coordinates}></Map>
          </Grid> */}
          {/* <Preview data={data} images={data.photos.map(each => each.url)} names={data.photos.map(each => each.name)}></Preview> */}
          <Gallery2 data={data.photos} setOpenSwipeable={setOpenSwipeable}></Gallery2>
        </Grid>
        <Grid container>
          <CssBaseline />
          <Grid container className={classes.root2}
            spacing={0}
          >

            {data.posts.map(each => <PostCard data={each}></PostCard>)}
          </Grid>

        </Grid>
      </Paper>
      {/* <div className="popup">
      asdf
    </div> */}
    </>
  )


}

export default Place
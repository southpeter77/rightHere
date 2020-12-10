import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { deepPurple } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';
import { Button } from '@material-ui/core';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {GRAB_ALL_POSTS} from "../store/actions/entities/entities"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    height: 700
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
}));

export default function PostCard({ data }) {
  const [loaded, setLoaded] = useState(false)
  const classes = useStyles();
  // const [data2, setData2] = useState(data)
  useEffect(()=>{
    setLoaded(!loaded)

  },[])
  if (!loaded) {
    return null
  }
  return (<>
    {/* <h1>{data? data.user.Photos[0].url: "asdf"}</h1> */}
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={data.User.Photos[0] ? data.User.Photos[0].url : null}
          >
          </Avatar>
        }
        // action={<Tooltip title={<h2>?</h2>}>
        //   <Button
        //     variant="contained"
        //     color="secondary"
        //     style={{ top: "2.5em" }}
        //   >??</Button></Tooltip>
        // }
        title={data.name}
        subheader={<Typography variant="body2">{`${data.User.firstName} ${data.User.lastName} `}<NavLink to={`/place/${data.Place.id}`} 
        style={{ color:'gray',textDecoration: 'none' }}>
          {`@${data.Place.name}`}</NavLink></Typography>}
  


      // title={`${data.User.firstName} ${data.User.lastName}`}
      // title={data2.User.email.split("@")[0]}
      // subheader={<NavLink to={`/place/${data.Place.id}`} style={{ color:'gray',textDecoration: 'none' }}>{`@${data.Place.name}`}</NavLink>}

      />
      {/* <Typography  variant="h5" component="h5" style={{  borderTop:'1px solid black', width:"96%", margin:"auto"}} >{data.name}</Typography> */}

    
      <CardMedia
        className={classes.media}
      image={data.Photos[0].url}
      style={{maxWidth:"800px", maxHeight:"500px"}}
      />
      <CardContent>
        {/* <Typography variant="h6" color="textSecondary" component="h6">
                    About this Route: {data.route.description}
        </Typography> */}
        <Typography variant="h6" color="textSecondary" component="h6" style={{  borderBottom:'1px solid gray' }} >
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  </>);
}



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
import Comment from "../comment/Comment"
import { useDispatch, useSelector } from "react-redux";
import {grabAllCommentsByPlaceIdThunk} from "../../components/store/actions/entities/entities"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    height: 700
  },
  media: {
    height: 0,
    paddingTop: '65%', // 16:9
  }, expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),modalActive: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0)",
      transition: "500ms ease-in-out",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "white",
      width: "500px",
      maxWidth: "80%",
      zIndex: "10",
      transform: "translate(-50%, -50%) scale(1)"
    }
  },modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
    transition: "500ms ease-in-out",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "white",
    width: "500px",
    maxWidth: "80%",
    zIndex: "10",
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function PostCard({ data }) {
  const [loaded, setLoaded] = useState(false)
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const[showComment, setShowComment] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const [data2, setData2] = useState(data)
  useEffect(()=>{
    setLoaded(true)
  },[])
  const dispatch = useDispatch()
  if(!loaded) {
    return null
  }

  return (<>
    <Card className={classes.root}>
      {/* <button onClick={()=> console.log(data)}>click</button> */}
      <CardHeader
        avatar={
          <Avatar
            src={data.User.Photos[0].url}
          >
          </Avatar>
        }
        title={data.name}
        subheader={<Typography variant="body2">
          {`${data.User.firstName} ${data.User.lastName} `}
          <NavLink to={`/place/${data.Places.id}`} 
        style={{ color:'gray',textDecoration: 'none' }}>
          {`@${data.Places.name}`}</NavLink>
          
          </Typography>}
      />
      <CardMedia
        className={classes.media}
      image={data.Photos[0].url}
      style={{maxWidth:"800px", maxHeight:"500px"}}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.description}
        </Typography>
        <Button
        fontSize="small"
        style={{left:"80%"}}
        onClick={()=>{setShowComment(true)
      }}
                  // variant="outlined"
            // color="primary"
        > view comments</Button>
        {showComment && <Comment modalClass={showComment} setShowComment={setShowComment} postId={data.id} postName={data.name}></Comment>}
      </CardContent>      
    </Card>
  </>);
}



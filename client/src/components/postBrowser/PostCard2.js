import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import { deepPurple } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Comment from "../comment/Comment"
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root1: {
    width: 330,
    height: 500,
    borderRadius:'20pt',
    margin:10
  },
  root2:{
    width: 300,
    height: 300,
    borderRadius:'20pt',
    margin:10
  },
  media: {
    height: 300,
    paddingTop: '80%', // 16:9
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
    setLoaded(!loaded)
  },[])
  const dispatch = useDispatch()
  if(!loaded) {
    return null
  }

  return (<>
    <Card className={classes.root1} elevation={3}>
      {/* <button onClick={()=> console.log(data)}>click</button> */}
      <CardHeader
        avatar={
          <Avatar
            src={data.User.Photos[0].url}
          >
          </Avatar>
        }
        title={<Typography variant="subtitle1">{data.name}</Typography>}
        subheader={<Typography variant="body2">
          {`${data.User.firstName}`}
          <Typography variant="body2" onClick={()=>window.location.href=`/place/${data.Places.id}`} 
        style={{ color:'gray',textDecoration: 'none',  cursor: "pointer"}}>
          {`@${data.Places.name}`}</Typography>
          
          </Typography>}
      />
      <CardMedia
        className={classes.media}
      image={data.Photos[0].url}
      style={{maxWidth:"800px", maxHeight:"700px"}}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.description}
        </Typography>
        <Button
        fontSize="small"
        style={{left:"50%"}}
        onClick={()=>{setShowComment(true)
      }}
                  // variant="outlined"
            // color="primary"
        >comments</Button>
        {showComment && <Comment modalClass={showComment} setShowComment={setShowComment} postId={data.id} postName={data.name}></Comment>}
      </CardContent>      
    </Card>
  </>);
}



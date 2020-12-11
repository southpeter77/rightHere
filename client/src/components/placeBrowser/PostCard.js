import React,{useState, useEffect} from 'react';
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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import Comment from "../comment/Comment"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 330,
    height: 500,
    borderRadius:'20pt',
    margin:10
  },
  media: {
    height: 300,
    paddingTop: '80%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },modalActive: {
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
//   avatar: {
//     backgroundColor: red[500],
//   },
}));

export default function PostCard({data}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const[showComment, setShowComment] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(()=>{
    setLoaded(!loaded)
  },[])
  if(!loaded) {
    return null
  }

  return (
    <Card className={classes.root}>
        {/* <button onClick={() => console.log(data)}>asdfasdf</button> */}
      <CardHeader
        avatar={
          <Avatar
          src={data.User.Photos[0]? data.User.Photos[0].url : null}
          >
            
          </Avatar>
        }
        title={data.name}
        subheader={`${data.User.firstName} ${data.User.lastName}`} 
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
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={()=>{setShowComment(!showComment)}}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      {showComment && <Comment modalClass={showComment} setShowComment={setShowComment} postId={data.id} postName={data.name}></Comment>}
      
    </Card>
  );
}
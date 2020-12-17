import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import Comment from "../comment/Comment"
import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
import {likeHandlerInOtherUsersProfile} from "../store/actions/like"
import { useDispatch } from "react-redux";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import {deletePost, editPost} from "../../components/store/actions/post"
import ImageExpand from "./ImageExpand"

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
  },  media2: {
    height: 200,
    paddingTop: '50%', // 16:9
  },
  expand: {
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

export default function PostCard({data, thisUserId}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const[showComment, setShowComment] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const currentUser = JSON.parse(window.localStorage.getItem(CURRENT_USER))
  const [edit, setEdit] = useState(false)
  const [enableEdit, setEnableEdit] = useState(false)
  const [newdescription, setNewDescription] = useState("")
  const[ newName, setNewName] = useState("")
  const [showImageExpand, setShowImageExpand] = useState(false)

  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  const dispatch = useDispatch()


  const clickLikeHandler = (id) => {
    const payload = {
      currentUserId: currentUser.userId,
      thisPostOwnerId:Number(thisUserId),
      postId:id
    }
dispatch(likeHandlerInOtherUsersProfile(payload))
  }

  useEffect(()=>{
    setLoaded(!loaded)
  },[])
  if(!loaded) {
    return null
  }
  return (
   <> {!edit ? 
      <Card className={classes.root}>
        <button onClick={() => console.log(data)}>123</button>

      <CardMedia
        className={classes.media}
        image={data.Photos[0].url}
      onClick={()=>setShowImageExpand(true)}

      />
      <CardContent>
      <Typography variant="h6" color="textSecondary" component="p">
        {data.name}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" component="p">
        {data.description}
        </Typography>
        
        <Typography variant="body2" onClick={()=>window.location.href=`/place/${data.Place.id}`} 
        style={{ color:'gray',textDecoration: 'none',  cursor: "pointer"}}>
          {`@${data.Place.name}`}</Typography>
          

        <Button 
        style={{marginLeft:"60%"}}
        onClick={()=>setEdit(true)}
        >Edit Post</Button>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}

<IconButton aria-label="add to favorites"
        onClick={()=>clickLikeHandler(data.id)}
        >
      {data.Likes.filter(each=>{
        if (each.user_id == currentUser.userId) {
          return each
        }
      }).length > 0
        ?<FavoriteIcon style={{color:'crimson'}}/>
        :<FavoriteIcon />
        }
        </IconButton>
        <Typography variant="body2">{`${data.Likes.length} likes`}</Typography>



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
      {showImageExpand && <ImageExpand showImageExpand={showImageExpand} setShowImageExpand={setShowImageExpand} image={data.Photos[0].url} postName={data.name}></ImageExpand>}

    </Card>
    
    : <Card className={classes.root}>
       <CardMedia
        className={classes.media2}
        image={data.photos && data.photos[0].url}
      />
      <CardContent>
      <Typography variant="h6" color="textSecondary" component="p">
        {data.name}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" component="p">
        {data.description}
        </Typography></CardContent>
      <Grid>

      <Grid>
         <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                onClick={()=>setEnableEdit(true)}
                value={enableEdit? newdescription : data.description}
                onChange={updateProperty(setNewDescription)}
              />
      </Grid>
      <Grid>
         <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                onClick={()=>setEnableEdit(true)}
                value={enableEdit? newName: data.name}
                onChange={updateProperty(setNewName)}
              />
      </Grid>


              </Grid>
      </Card>}</>
  );
}
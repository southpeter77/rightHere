import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comment from "../comment/Comment"
import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
import {likeHandlerInPlace,} from "../store/actions/like"
import { useDispatch,  } from "react-redux";
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
  const currentUser = JSON.parse(window.localStorage.getItem(CURRENT_USER))
  const dispatch = useDispatch()
  const [showImageExpand, setShowImageExpand] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const clickLikeHandler = (id) => {
    const payload = {
      userId: currentUser.userId,
      postId:id,
      placeId:data.place_id
    }
    // console.log(data)
dispatch(likeHandlerInPlace(payload))
    // console.log(id)
  }


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
        title={<Typography variant="subtitle1">{data.name}</Typography>}

        // subheader={<Typography variant="body2">{data.User.firstName} {data.User.lastName}</Typography>} 
      subheader={          <Typography
        variant="body2" style={{textDecoration:"underline", cursor: "pointer"}} onClick={()=>window.location.href=`/profile/${data.User.id}`}
        >{`by ${data.User && data.User.firstName}`}</Typography>}
      />
      <CardMedia
        className={classes.media}
        image={data.Photos[0].url}
        style={{maxWidth:"800px", maxHeight:"700px"}}
        onClick={()=>setShowImageExpand(true)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>





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
  );
}
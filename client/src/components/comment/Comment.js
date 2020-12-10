import React,{useState, useEffect} from "react"
import style from "./style.css"
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from "react-redux";
import {grabAllCommentsByPlaceIdThunk} from "../../components/store/actions/entities/entities"
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
// import {createComment} from "../../components/store/actions/comment"
import {createComment} from "../../components/store/actions/entities/entities"

const useStyles = makeStyles((theme) => ({
    root: {
      width: 800,
      height: 700
    },modal: {
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
      },modalActive: {
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
        transform: "translate(-50%, -50%) scale(1)"
      }
  }));

const Comment = ({modalClass, setShowComment, postId, comments}) => {
  const classes = useStyles();
  const currentUser = JSON.parse(window.localStorage.getItem(CURRENT_USER))
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };
  const handleCommentSubmit = () => {
    const payload = {
      postId, userId:currentUser.userId,comment:comment
    }
    dispatch(createComment(payload))
    setComment("")
  }

  // useEffect(()=>{

    // dispatch(grabAllCommentsByPlaceIdThunk(postId))
    // setLoaded(!loaded)

  // },[])

  if (modalClass) {
    return (
        <>
    <div className={classes.modalActive} id="modal">
    <div className="modal-header">
      <div className="title">Comments</div>
      {/* <button data-close-button className="close-button">&times;</button> */}
      <IconButton className="close-button" onClick={()=>setShowComment(false)}>
          <CancelIcon></CancelIcon>
      </IconButton>
    </div>
    <button
    onClick={()=>console.log(comments)}
    > postId</button>
    <div className="modal-body">
        {comments.map(each=>{
          return (
            <Typography>hi</Typography>
          )
        })}
    <Grid>
          <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Comment"
                name="comment"
                value={comment}
                onChange={updateProperty(setComment)}
              /><IconButton
              onClick={()=>handleCommentSubmit()}
              >
                <CheckCircleIcon/>
                </IconButton>
                <IconButton>
          <CancelIcon/>
      </IconButton>
    </Grid>

    </div>
    
  </div>
  </>
    )
  } 
    return (
        <>
    <div className={classes.modal} id="modal">
    <div className="modal-header">
      <div className="title">Comments</div>
      {/* <button data-close-button className="close-button">&times;</button> */}
      <IconButton className="close-button" onClick={()=>setShowComment(false)}>

          <CancelIcon></CancelIcon>
      </IconButton>
    </div>
    <div className="modal-body">
      <Typography>asdf</Typography>
    </div>
  </div>
  </>
    )
}

export default Comment
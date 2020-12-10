import React from "react"
import style from "./style.css"
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

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

const Comment = ({modalClass, setShowComment, comments}) => {
  const classes = useStyles();
  if (modalClass) {
    return (
        <>
    <div className={classes.modalActive} id="modal">
    <div className="modal-header">
      <div className="title">Example Modal</div>
      {/* <button data-close-button className="close-button">&times;</button> */}
      <IconButton className="close-button" onClick={()=>setShowComment(false)}>
          <CancelIcon>asdf</CancelIcon>
      </IconButton>
    </div>
    <button
    onClick={()=>console.log(comments)}
    > comments</button>
    <div className="modal-body">
              comments here
    </div>
  </div>
  </>
    )
  } 
    return (
        <>
    <div className={classes.modal} id="modal">
    <div className="modal-header">
      <div className="title">Example Modal</div>
      {/* <button data-close-button className="close-button">&times;</button> */}
      <IconButton className="close-button" onClick={()=>setShowComment(false)}>

          <CancelIcon>asdf</CancelIcon>
      </IconButton>
    </div>
    <div className="modal-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
    </div>
  </div>
  </>
    )
}

export default Comment
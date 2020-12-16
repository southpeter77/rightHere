import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
export default function AlertDialog({showImageExpand, setShowImageExpand, image, postName}) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={showImageExpand}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{postName}</DialogTitle>
        <DialogContent>
<img
src={image}
style={{
    width:'500px',
    height:'auto'
}}></img>
        </DialogContent>
        <IconButton
        style={{width:"2rem", marginLeft:"90%"}}
        onClick={()=>setShowImageExpand(false)} color="primary">
          <CancelIcon >
            
          </CancelIcon>
        </IconButton>
      </Dialog>
    </div>
  );
}
















// import React,{useState, useEffect} from "react"
// import style from "./style.css"
// import { makeStyles } from '@material-ui/core/styles';
// import CancelIcon from '@material-ui/icons/Cancel';
// import IconButton from '@material-ui/core/IconButton';
// import { useDispatch, useSelector } from "react-redux";
// import {grabAllCommentsByPostIdThunk} from "../../components/store/actions/entities/entities"
// import { Typography } from "@material-ui/core";
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
// // import {createComment} from "../../components/store/actions/comment"
// import Avatar from '@material-ui/core/Avatar';
// import CardHeader from '@material-ui/core/CardHeader';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: 1000,
//       height: 900
//     },modal: {
//         position: "fixed",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%) scale(0)",
//         transition: "500ms ease-in-out",
//         border: "1px solid lightgray",
//         borderRadius: "2px",
//         backgroundColor: "white",
//         width: "900px",
//         maxWidth: "80%",
//         zIndex: "10",
//         maxHeight:"900pt"

//       },modalActive: {
//         position: "fixed",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%) scale(0)",
//         transition: "500ms ease-in-out",
//         border: "1px solid lightgray",
//         borderRadius: "2px",
//         backgroundColor: "white",
//         width: "800px",
//         maxWidth: "80%",
//         zIndex: "10",
//         transform: "translate(-50%, -50%) scale(1)",
//         height:"430pt",
//         display: "flex", /*added*/
//         flexDirection: "column", /*added*/
//         borderRadius:"20pt"
//       }
//   }));

// const Comment = ({modalClass, setShowImageExpand, image, postName}) => {
//   const classes = useStyles();
//   const dispatch = useDispatch()
//   const [loaded, setLoaded] = useState(false)


//   useEffect(()=>{
//     setLoaded(!loaded)

//   },[])



//   if (!loaded){
//     return null
//   }

//   if (modalClass) {
//     return (
//         <>
//     <div className={classes.modalActive} id="modal">
//     <div className="modal-header">
//       <div className="title">{postName}</div>
//       <IconButton className="close-button" onClick={()=>setShowImageExpand(false)}>
//           <CancelIcon></CancelIcon>
//       </IconButton>
//     </div>

//     <div style={{
//         backgroundImage:`url(${image})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     padding: '200px 200px',
//     }}>
    
//     </div>
    
//   </div>
//   </>
//     )
//   } 
// }

// export default Comment
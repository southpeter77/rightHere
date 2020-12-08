import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    // margin: theme.spacing(5),
    margin: theme.spacing(5, 30)
  },
  paper: {
    margin: theme.spacing(5, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
  },
  form: {
    width: '60%',
    margin: theme.spacing(5,35),
  },
  submit: {
    width: "100%",
    margin: theme.spacing(1, 0, 2),
  },
}));

const CreatePostForm = ({currentCoordinates,image}) => {
  const classes = useStyles();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    // const place_id = useSelector(state=> state.)
  const dispatch = useDispatch()
  const place_id = useSelector(state=> state.sessions.currentLocation.id)
  const user_id = useSelector(state=> state.sessions.currentUser.id)
  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  const handleSubmit = async (e)=> {
    // const payload={
    //   name, description, currentCoordinates, place_id,user_id,image
    // } console.log(data)
    e.preventDefault()
    const data = new FormData();
    data.append("name", name)
    data.append("description", description)
    data.append("currentCoordinates", currentCoordinates)
    data.append("user_id", user_id)
    data.append("place_id", place_id)
    data.append("file", image)

    
    
  
  }
  return (

          <div className={classes.paper} >
                  <form className={classes.form} noValidate>
         <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Post's Name"
                name="name"
                value={name}
                onChange={updateProperty(setName)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={3}
                id="description"
                label="Description"
                name="description"
                value={description}
                onChange={updateProperty(setDescription)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Create Post
          </Button>
   
            <Grid item>

          </Grid>
        </form>
          </div>

  );
}


export default CreatePostForm
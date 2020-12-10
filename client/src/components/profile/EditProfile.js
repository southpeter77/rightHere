import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { DropzoneArea } from 'material-ui-dropzone';
import Loading from "./Loading"
import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
import {updateBiography} from "../../components/store/actions/user"
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        margin: theme.spacing(1),
    },
}));

const EditProfile = ({ showBioEdit, showPhotoEdit }) => {
    const classes = useStyles();
    const data = JSON.parse(window.localStorage.getItem(CURRENT_USER))
    const [biography, setBiography] = useState("")
    const [image, setImage] = useState("")
    const dispatch = useDispatch()

    const updateProperty = (callback) => (e) => {
        callback(e.target.value);
    };

    const handleBiographyUpdate = async (e) => {
        e.preventDefault()
        const payload = {
            biography,
            userId:data.userId
        }
        dispatch(updateBiography(payload))
    }
    return (<>
        <CssBaseline />
        {showPhotoEdit ? <div style={{ height: '230pt' }}
        ><DropzoneArea
                acceptedFiles={['image/*']}
                dropzoneText={"Drag and drop an image here or click"}
                onChange={(files) => setImage(files[0])}
            />
            <div style={{ height: '30pt' }}>
                <Loading /></div>
        </div> : null}
        {showBioEdit ? <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                rows={3}
                id="biography"
                label="Biography"
                name="biography"
                value={biography}
                onChange={updateProperty(setBiography)}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleBiographyUpdate}
            >update</Button>
        </form> : null}
    </>
    );
}



export default EditProfile 
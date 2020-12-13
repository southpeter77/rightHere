import React, {useState} from "react"
import { useDispatch } from "react-redux";
import { DropzoneArea } from 'material-ui-dropzone';
// import IconButton from '@material-ui/core/IconButton';
// import CancelIcon from '@material-ui/icons/Cancel';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {uploadPhotoByPlaceId} from "../../components/store/actions/photo"
import Loading from "../profile/Loading"
const UploadImage = ({placeId}) => {
const [image, setImage] = useState("")
const [name, setName] = useState("")
const dispatch = useDispatch()
const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  const handleSubmit = async (e)=> {

    const data = new FormData();
    data.append("name", name)
    data.append("file", image)
    data.append("place_id", placeId)
  dispatch(uploadPhotoByPlaceId(data))
  setTimeout(()=>{
    window.location.href=`/place/${placeId}`
  },4000)  }

    return (
        <>
    <div style={{height:"250px",width:"300px", marginTop:"5%", marginBottm:"50pt"}} >

        <DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => setImage(files[0])}
/>    
<TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Photo Name"
                name="name"
                value={name}
                onChange={updateProperty(setName)}
              />
    {/* {name && image ? <Button
              onClick={handleSubmit}
              >Upload</Button>:null } */}
              {name && image ?<Loading handleImageUpdate={handleSubmit}></Loading>:null }
</div>
</>
    )
}



export default UploadImage
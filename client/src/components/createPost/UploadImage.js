import React from "react"
import { DropzoneArea } from 'material-ui-dropzone';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import style from "./style.css"
const UploadImage = ({setShowUpload,setShowGallery}) => {


    return (
        <>
    <div className="dragZoneArea">
    <IconButton
        style={{height:"40pt", marginLeft:"90%"}}
        onClick={()=>{
            setShowUpload(false)
            setShowGallery(true)
        }}
        >
          <CancelIcon fontSize="large"></CancelIcon>
        </IconButton>

        <DropzoneArea
  acceptedFiles={['image/*']}
  dropzoneText={"Drag and drop an image here or click"}
  onChange={(files) => console.log('Files:', files)}
/>    </div>
</>
    )
}



export default UploadImage
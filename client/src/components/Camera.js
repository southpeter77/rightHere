import React,{useState, useRef,useCallback} from "react";
import Webcam from "react-webcam";
import IconButton from '@material-ui/core/IconButton';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CancelIcon from '@material-ui/icons/Cancel';
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  

  
  const Camera = () => {
    const webcamRef = useRef(null);
    const [data, setData] = useState("")
    const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot({width: 500, height: 600});
        console.log(imageSrc)
      },
      [webcamRef]
    );
  
    return (
      <>
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={600}
          videoConstraints={videoConstraints}
        />
        {/* <button onClick={capture}>Capture photo</button> */}
        <IconButton>
          <RadioButtonCheckedIcon fontSize="large"></RadioButtonCheckedIcon>
        </IconButton>
        <IconButton>
          <CancelIcon onClick={()=>window.location.replace("/create/post")} fontSize="large"></CancelIcon>
        </IconButton>
        
      </>
    );
  };

export default Camera

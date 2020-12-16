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
  

  
  const Camera = ({setShowCamera,setShowGallery, setImage}) => {
    const webcamRef = useRef(null);
    const [data, setData] = useState("")
    const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot({width: 1280, height: 720});
        setData(imageSrc)
        // console.log(imageSrc)
        setImage(imageSrc)
      },
      [webcamRef]
    );
  
      const handelCancel= () => {
        setShowCamera(false)
        setShowGallery(true)
      }

    return (
      <>   
      {data ?<div
      style={{width:"100%", display:"flex", justifyContent:"center", flexWrap:"wrap"}}
      >
<IconButton
        style={{height:"40pt"}}
        >
          <CancelIcon onClick={()=>{handelCancel()
            setData("")
          }} fontSize="large"></CancelIcon>
        </IconButton>
       <img
      style={{width:'460.8px', height:'259.2px', borderRadius:"10pt"}}
      src={data}>
      
      </img></div>: null}    

        {!data ?<> <Webcam
          audio={false}
          height={580}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={480}
          videoConstraints={videoConstraints}
        />

         <div
         style={{display:'flex', justifyContent:"space-around"}}
         
         ><IconButton
        style={{height:"40pt"}}
        onClick={()=>capture()}
        >
          <RadioButtonCheckedIcon fontSize="large"></RadioButtonCheckedIcon>
        </IconButton>
                           <IconButton
        style={{height:"40pt"}}
        >
          <CancelIcon onClick={()=>{handelCancel()
            setData("")
          }} fontSize="large"></CancelIcon>
        </IconButton>        

        
         </div> </>: null}

      </>
    );
  };

export default Camera

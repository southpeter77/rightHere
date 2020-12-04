import React,{useState, useRef,useCallback} from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  

  
  const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const [data, setData] = useState("")
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot({width: 500, height: 600});
        console.log(imageSrc)
      },
      [webcamRef]
    );
  
    return (
      <>
      <h1>helloooooooooo</h1>
        <Webcam
          audio={false}
          height={400}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </>
    );
  };

export default WebcamCapture

// state structure
// state ={
//   entities:{
//     users:{
//       1:{
//         id:1,
//         email: "email.com",
//       },
//       3:{
//         id:3,
//         email: '3email.com'
//       }
//     },
//     markers:{
//       1:{
//         id:1,
//         coordinate: 12345,
//         photoID:2
//       }
//     },
//     location: {
//       1:{
//         id:1,
//         name: "good place"
//       }
//     },
//     photos: {
//       2:{
//         id:2,
//         url: "asdfasdfasdf"
//       }
//     }
//   },
//   session:{
//     currentUserId:1,
//     currentMarkerId: 1,
//   },
//   errors:{
//     loginError:[],
//     signUperror:[],
//   },
//   ui:{ //optional flag for conditionally render certain component
//     signUpModual: true // true = modual appear, false = disappear
//   }

// }
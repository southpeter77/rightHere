import React, { useState } from "react";
// import Swipeable from "react-swipeable";
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

const IMG_WIDTH = "500px";
const IMG_HEIGHT = "450px";

const RIGHT = "-1";
const LEFT = "+1";

const buttonStyles = {
  height: "55px",
  width: "30px",
  color: "white",
  fontSize: "10pt",
  // backgroundColor: "rgba(230,230,230,.1)",
  // border: "0",
  cursor: "pointer",
  // marginTop: "100px"
};
const buttonLeft = { ...buttonStyles, float: "left" };
const buttonRight = { ...buttonStyles, float: "right" };

const SimpleCarousel = ({ images, setOpenSwipeable }) => {

  const [imageIdx, setImageIdx] = useState(0)
  const divStyle = {
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    // width:"430px",
    // height:"450px",
    // border: "1px solid red"
  };
  const imageSrc = `${images[imageIdx]}`
  const onSwiped = (direction) => {
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = imageIdx + Number(change);
    let newIdx;
    if (adjustedIdx >= images.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = images.length - 1;
    } else {
      newIdx = adjustedIdx;
    }
    setImageIdx(newIdx);
  }

  return (<>
    <div>
      <div className="popup-content">
        <IconButton onClick={() => onSwiped(RIGHT)} style={buttonLeft} fontSize="large">
        <ArrowLeftIcon ></ArrowLeftIcon>
        </IconButton>
{/* 
      <Button variant="contained"
            color="secondary" 
            
            onClick={() => onSwiped(RIGHT)} style={buttonLeft}>
          ⇦
            </Button> */}
        <img
        src={imageSrc}
      style={{
        backgroundSize:'cover',
        width:"500px",
        height:"auto",
        maxWidth:"500px",
        maxHeight:"600px",
      }}
        ></img>
                <IconButton onClick={() => onSwiped(LEFT)} style={buttonRight} fontSize="large">
        <ArrowRightIcon ></ArrowRightIcon>
        </IconButton>
        <IconButton onClick={() => setOpenSwipeable(false)} style={buttonRight} fontSize="large">
        <CancelIcon ></CancelIcon>
        </IconButton>

  {/* <Button             variant="contained"
            color="secondary"  onClick={() => onSwiped(LEFT)} style={buttonRight}>
          ⇨
            </Button> */}
      </div>
    </div>
    {/* <Typography  variant="h6" component="h6" align="center">{description[imageIdx]}</Typography>    */}
  </>)
}

export default SimpleCarousel
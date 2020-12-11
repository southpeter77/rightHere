import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mapCss from "./mapCss.css"
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import {deletePhotoByPhotoId} from "../../components/store/actions/photo"
const useStyles = makeStyles({
  root: {
    width: 360,
    height: 320,
    borderRadius:'20pt',
    margin:10
  },
  media: {
    height: 320,
    paddingTop: '80%', // 16:9

  },
});


export default function PlaceCards({data, setting,placeId}) {
  const classes = useStyles();
    const [mouseHover, setMouseHover] = useState({raised:false, shadow:1})
    const handleDelete = (id) => {
     let result = deletePhotoByPhotoId(id)
     if (result) {
       window.location.href=`/place/${placeId}`
     }
    }
  return (<>
  <div>
    {/* <button
    onClick={()=>console.log(data)}
    >asdf</button> */}
    { setting ? <IconButton
    onClick={()=>handleDelete(data.id)}
    >
  <CancelIcon>
  </CancelIcon>
</IconButton> : null}
    <Card className={classes.root}
    onMouseOver={()=>setMouseHover({raised:true, shadow:3})}
    onMouseOut={()=>setMouseHover({raised:false, shadow:1})}
    raised={mouseHover.raised}
    shadow={mouseHover.shadow}

    >

  

      <CardActionArea>
      <div class="img__wrap">
        <CardMedia
          className={classes.media}
          className="imgTag"
          image={data.url}
        />
         {/* <p class="img__description"></p> */}
        </div>


      </CardActionArea>
    </Card>
    <Typography
    align="center"
             variant="body1"
  >{data.name} </Typography>
   </div>
      </>
  );
}
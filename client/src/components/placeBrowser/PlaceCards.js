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

const useStyles = makeStyles({
  root: {
    width: 360,
    height: 320,
    borderRadius:'20pt',
    margin:10
  },
  media: {
    height: 320,
  },
});

export default function PlaceCards({data}) {
  const classes = useStyles();
    const [mouseHover, setMouseHover] = useState({raised:false, shadow:1})
  return (
    <Card className={classes.root}
    onMouseOver={()=>setMouseHover({raised:true, shadow:3})}
    onMouseOut={()=>setMouseHover({raised:false, shadow:1})}
    raised={mouseHover.raised}
    shadow={mouseHover.shadow}
    onClick={()=>window.location.href=`/place/${data.id}`}
    >
      <CardActionArea>
      <div class="img__wrap">
        <CardMedia
          className={classes.media}
          className="imgTag"
          image={data.Photos.length > 0 ?  data.Photos[0].url : null}
        />
         {/* <p class="img__description"></p> */}
         <div className="img__description">
             <Typography
             variant="h6"
             className="onHoverText"
  >{data.Posts.length >1 ?`${data.Posts.length} posts` : `${data.Posts.length} post` } </Typography>
         
         </div>
        </div>
          
        <CardContent>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
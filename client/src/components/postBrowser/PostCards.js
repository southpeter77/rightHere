import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { deepPurple } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    maxHeight: 600
  },
  media: {
    height: 0,
    paddingTop: '40%', // 16:9
  },
}));

export default function PostCard({ data }) {
  const [loaded, setLoaded] = useState(false)
  const classes = useStyles();
  return (<>
    {/* <h1>{data? data.user.Photos[0].url: "asdf"}</h1> */}
    <Card className={classes.root}>
      <Button
        onClick={() => console.log(data)}
      >heeeeeee</Button>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={data.user.Photos[0] ? data.user.Photos[0].url : null}
          >
          </Avatar>
        }
        action={<Tooltip title={<h2>?</h2>}>
          <Button
            variant="contained"
            color="primary"
            style={{ top: "2.5em" }}
          // onClick={() => window.location.replace(`/users/${window.localStorage.getItem("currentUser")}/workout/${data.id}`)}
          >??</Button></Tooltip>
        }
      title={`${data.user.firstName} ${data.user.lastName}`}
      subheader="location"
      />
      <Typography style={{ marginLeft: "1em" }} variant="h5" component="h5">asdfasdfasdf</Typography>

      <Grid container>
        <Grid item xs={3}
          align="center">
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6"
            component="h6"
            align="left"
            style={{ color: "gray" }}
          >?
              </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6"
            component="h6"
            align="left"
            style={{ color: "gray" }}
          >?
              </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6"
            component="h6"
            align="left"
            style={{ color: "gray" }}
          >?
              </Typography>
        </Grid>
        <Grid item xs={3} align="center"></Grid>
        <Grid item xs={3}>
          <Typography variant="h6"
            component="h6"
            align="left"
          >999
              </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6"
            component="h6"
            align="left"
          >999
              </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6"
            component="h6"
            align="left"
          >123123
              </Typography>
        </Grid>

      </Grid>
      <CardMedia
        className={classes.media}
      // image={data.route.staticImageURL}
      />
      <CardContent>
        {/* <Typography variant="h6" color="textSecondary" component="h6">
                    About this Route: {data.route.description}
        </Typography> */}
        <Typography variant="h6" color="textSecondary" component="h6">
          Description:
        </Typography>
      </CardContent>
    </Card>
  </>);
}



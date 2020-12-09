import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
const styles = makeStyles((theme) => ({
    feed: {
        padding: '2px 4px',
        alignItems: 'center',
        width: 650,
    },
    paper: {
        maxWidth: 950,
        margin: 'auto',
        marginTop: "5%",
        position: "relative"
    },
    profile: {
        padding: '2px 4px',
        alignItems: 'center',
        width: 300,
        position: "fixed"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    }, sticky: {
        background: 'white',
        position: '-webkit-sticky',
        position: 'fixed',
        left: '10%',
        top: '80px',
        bottom: 0,
        // paddingTop: '40px',
        // paddingBottom: '40px',
        zIndex: 5,
    },
}));


const PostFeeds = () => {
    const classes = styles()
    const dispatch = useDispatch()
    const data = JSON.parse(window.localStorage.getItem(CURRENT_USER))
    useEffect(() => {


    }, []);
    console.log(data)
    return (
        <>

            <Paper className={classes.paper} elevation={1}>
                <Grid container>
                    <Grid item>
                        <Card className={classes.feed}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        style={{ width: '100pt', height: '100pt' }}
                                    >
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <Button>Edit</Button>
                                    </IconButton>
                                }
                                title={`${data.firstName} ${data.lastName}`}
                                subheader={data.email}

                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.biography}
                                </Typography>
                            </CardContent>

                        </Card>

                    </Grid>
                    <Grid item>
                        <Card className={classes.profile}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        style={{ width: '100pt', height: '100pt' }}
                                        src={data.photos[0].url}
                                    >
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <Button>Edit</Button>
                                    </IconButton>
                                }
                                title={`${data.firstName} ${data.lastName}`}
                                subheader={data.email}

                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.biography}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}


export default PostFeeds;


{/* <Grid item xs={false} sm={12} md={12} elevation={0} className={classes.sticky}>
<Card className={classes.root}>
    <CardHeader
        avatar={
            <Avatar
                style={{ width: '100pt', height: '100pt' }}
            >
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
              
            </IconButton>
          }
          title={`${data.firstName} ${data.lastName}`}
          subheader={data.email}
          
        />

<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
This impressive paella is a perfect party dish and a fun meal to cook together with your
guests. Add 1 cup of frozen peas along with the mussels, if you like.
</Typography>
</CardContent>

</Card>

</Grid> */}
import React, { useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import IconButton from '@material-ui/core/IconButton';
import ExploreIcon from '@material-ui/icons/Explore';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        justifyContent:'space-around'
    },

  }));

const ProfileNavBar = () => {
    const classes = useStyles();

    return (
<Grid className={classes.root}>
    <IconButton>
<PhotoLibraryIcon
fontSize="large"
/> <Typography variant="subtitle1" component="subtitle1">View my posts</Typography>
    </IconButton>
    <IconButton>
<ExploreIcon
fontSize="large"
/><Typography variant="subtitle1" component="subtitle1">View my places</Typography>
    </IconButton>
</Grid>
    )
};
export default ProfileNavBar;
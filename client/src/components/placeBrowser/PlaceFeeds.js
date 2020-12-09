import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import PlaceCards from "./PlaceCards"
import {grablAllPlacesThunk} from "../../components/store/actions/entities/entities"
const styles = makeStyles((theme) => ({
    paper: {
        maxWidth: 750,
        margin: 'auto',
        marginTop:"5%",
        display:'flex',
        flexWrap:"wrap",
        justifyContent: 'center',

    },
}));


const PlaceFeeds = () => {
    const classes = styles()

    const dispatch = useDispatch()

    useEffect( () => {

        dispatch(grablAllPlacesThunk())
    }, []);

    return (
        <>

            <Paper className={classes.paper} elevation={1}>
<PlaceCards></PlaceCards>
<PlaceCards></PlaceCards>
<PlaceCards></PlaceCards>
<PlaceCards></PlaceCards>


            </Paper>
        </>
    )
}


export default PlaceFeeds;

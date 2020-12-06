import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 850,
        height: 550,
    },
    paper: {
        maxWidth: 850,
        margin: 'auto',
        marginTop:"5%"

    },
}));


const IndividualPicture = ({selectedPic,setSelectedPic}) => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper} elevation={5}>
                <img src={selectedPic}></img>
            </Paper>
        </>
    )
}
export default function Gallery({ data }) {
    const classes = useStyles();
    const photoUrls = data.byId.photos
    const [selectedPic, setSelectedPic] = useState('')

    return (
        <div className={classes.root}>
            {selectedPic ?
                <IndividualPicture selectedPic={selectedPic} setSelectedPic={setSelectedPic}></IndividualPicture>
                : null}

            {/* <button
                onClick={() => console.log(photoUrls)}
            >console.log</button> */}
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {/* {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))} */}
                {photoUrls && photoUrls.map((each) => {
                    return (
                        <>
                            <GridListTile key={each.url} cols={2} style={{ margin: 'auto' }}>
                                <img
                                style={{maxWidth:"320px",
                            maxHeight:"320px",
                            border: "2px solid gray",
        boxShadow: "rgba(0, 0, 0, 1) 3px 2px 1px 1px",
                        
                        }} 
                                src={each.url} onClick={() => setSelectedPic(each.url)}></img>
                            </GridListTile>
                        </>
                    )
                })}
            </GridList>
        </div>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin:'auto'
  },
  gridList: {
    width: 805,
    maxHeight: 500,
    backgroundColor:'lightgray',
    // marginTop:'20pt'
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList({data,images, names}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={140} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
  <ListSubheader component="div">Hot Spots at {data.name}</ListSubheader>
        </GridListTile>
        {images.map((tile, i) => (
          <GridListTile key={tile}>
            <img src={tile} alt={names[i]} />
            <GridListTileBar
              title={names[i]}
              // subtitle={<span>by: {tile.author}</span>}
              // actionIcon={
              //   <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
              //     <InfoIcon />
              //   </IconButton>
              // }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
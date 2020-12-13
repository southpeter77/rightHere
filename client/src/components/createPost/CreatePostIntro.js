import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 610,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

const tileData = [
   {
     img: "/uploadPicture.jpg",
     title: 'Capture the Moment and Share with people around you...',
     author: 'author',
     featured: true,
   },   {
    img: "/uploadPicture2.jpg",
    // title: 'Take a Photo',
    author: 'author',
  },    
   {
    img: "/uploadPicture4.jpg",
    // title: 'or Upload a Photo',
    author: 'author',

  },
 ]


export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            {tile.title? <GridListTileBar
            title={tile.title}
              titlePosition="bottom"
              actionPosition="left"
              className={classes.titleBar}
            />:null}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';



const useStyles = makeStyles({
  root: {
      minWidth: 445,
    background: 'rgba(0,0,0,0.5)',
    // margin: '20px',
    borderRadius: '10px',
    marginTop:'10px'
  },
  media: {
    height: 300,
    margin:'10px',
    borderRadius: '10px'
  },
  title:{
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#fff',
  },
  desc:{
    fontWeight: 'bold',
    fontSize: '0.8rem',
    color: '#ddd',
  },
});

export default function ImageSignUp2({intro, checked}) {
  const classes = useStyles();

  return (
      <Collapse in={checked}
      {...(checked ? {timeout: 1000} : {})} collapsedHeight={50}
      >
    <Card className={classes.root}>

        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + `${intro.img}`}
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2"
          className={classes.title}
          >
            {intro.title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p"
          className={classes.desc}
          >
            {intro.title}
          </Typography> */}
        </CardContent>

    </Card>
    </Collapse>
  );
}
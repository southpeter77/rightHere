import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Carousel from './Carousel';
import { preLoadImages } from './utils';

const styles = {
  fontFamily: 'sans-serif',

};


const SwipeAbleContainer = ({data}) => {
// const IMG_1 = `https://unsplash.it/342/249`;
// const IMG_2 = `https://unsplash.it/342/250`;
// const IMG_3 = `https://unsplash.it/342/251`;
// const IMG_4 = `https://unsplash.it/342/252`;
// const IMG_5 = `https://unsplash.it/342/253`;
// const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];
// const [loaded, setLoaded] = useState(false)

// useEffect(()=>{
//   setLoaded(true)

// },[])

// if (!loaded) {
//   return false
// }
 return ( <div style={styles}>  
  <Carousel images={data.photos.map(each=>each.url)} />
  </div>)
}



export default SwipeAbleContainer
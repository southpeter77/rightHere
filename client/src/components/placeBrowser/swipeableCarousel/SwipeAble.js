import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Carousel from './Carousel';
// import { preLoadImages } from './utils';
import swipeStyle from "./swipeStyle.css"



const SwipeAbleContainer = ({data,setOpenSwipeable}) => {

 return ( 
 <> 
 <div className="popup">  
  <Carousel images={data.photos.map(each=>each.url)} setOpenSwipeable={setOpenSwipeable} />
  </div>
  </>
  )
}



export default SwipeAbleContainer
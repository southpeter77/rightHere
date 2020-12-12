import React, {useState, useEffect} from "react"
import {likeHandler, grabALlLikesByPostId} from "../store/actions/like"
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';



const Like = ({postId, userId}) => {
    const likes = Object.values(useSelector(state => state.entities.likes.byId))
    const dispatch= useDispatch()
    const [loaded, setLoaded] = useState(false)
    const clickLikeHandler = () => {
        const payload = {
          userId,
          postId
        }

    // dispatch(likeHandler(payload))
        console.log(likes.length)
      }

      useEffect(()=>{
        //   dispatch(grabALlLikesByPostId(postId))
        setLoaded(true)
    })
      if (!loaded) {
          return (
            <>
            <IconButton aria-label="add to favorites"
            >
          <FavoriteIcon /> 
            </IconButton>
            </>
          )
      }

    return (
        <>
        <IconButton aria-label="add to favorites"
        onClick={()=>clickLikeHandler()}
        >
      <FavoriteIcon /> 
        </IconButton>
        <Typography variant="body2">{`${likes.length} likes`}</Typography>

        </>
    )
}

export default Like
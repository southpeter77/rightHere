import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
// import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import AddBoxIcon from '@material-ui/icons/AddBox';
// import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
// import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
// import { Redirect,useParams } from "react-router-dom"
// import PostCards from "./PostCards"
import {grablAllPlacesThunk, grabAllPostsThunk} from "../store/actions/entities/entities"
import PostCard2 from "./PostCard2"
import {grabAllLikes} from "../store/actions/like"

const styles = makeStyles((theme) => ({
    paper: {
        maxWidth: 750,
        margin: 'auto',
        marginTop:"5%"

    },    paper2: {
        margin: 'auto',
        marginTop:"5%",
        display:'flex',
        flexWrap:"wrap",
        justifyContent: 'center',


    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
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
    },
}));


const PostFeeds = () => {
    const classes = styles()
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch()
    const datasArray = useSelector(state=>state.entities.posts.allId)
    const datas = Object.values(useSelector(state=>state.entities.posts.byId))


    // const data= JSON.parse(window.localStorage.getItem(GRAB_ALL_POSTS))
    const likes = useSelector(state=> state.entities.likes.byId)
    // console.log(datas)
    useEffect( () => {

         dispatch(grabAllPostsThunk())
         dispatch(grablAllPlacesThunk())
            dispatch(grabAllLikes())
        setLoaded(true)
  
    }, []);
    // console.log(data)
    // if(!data) {
    //     return null
    // }
    // console.log(datas)

    return (
        <>

            <Paper className={classes.paper2} elevation={1}>
                {/* <button
                onClick={()=>console.log(datas)}
                >console</button> */}
{/* {datas ?
datasArray.map(each=>{
    return(
<PostCards data={datas[each]}></PostCards>)})
:null} */}
{/* {datas.map(each=><PostCards data={each}></PostCards>)} */}




{/* {data.map(each=><PostCards data={each}></PostCards>)} */}


{datas.map(each=>{

return(
    <PostCard2 data={each}></PostCard2>
    // <h1>asdfasdf</h1>
)
})}






{/* {datas.map(each=>{

    return(
        <PostCards data={each}></PostCards>
        // <h1>asdfasdf</h1>
    )
})}
 */}



            </Paper>
        </>
    )
}


export default PostFeeds;

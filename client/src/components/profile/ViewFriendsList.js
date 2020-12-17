import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MessageIcon from '@material-ui/icons/Message';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Tooltip from '@material-ui/core/Tooltip';
import {acceptFriendRequest} from "../../components/store/actions/relationship"
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        maxHeight: 150,
        margin: 3,
        backgroundColor: "lightgreen"
    },
    root2: {
        maxWidth: 350,
        maxHeight: 150,
        margin: 3,
        backgroundColor: "lightyellow"
    },
    media: {
        height: 0,
        paddingTop: '80%', // 16:9
    },
    avatar: {
        height: 100,
        width: 100
    },
}));

export default function ViewFriendList({ data,currentUserId }) {
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleAcceptFriendRequest = () => {
        const payload = {
            relationshipId: data.id,
            currentUserId
        }
        // console.log(data)
        dispatch(acceptFriendRequest(payload))
    }
    useEffect(()=>{

    },[])


    if (data.pending) {
        return (
            <Card className={!data.pending ? classes.root : classes.root2}>
                {/* <button onClick={() => console.log(data)}>console</button> */}
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}
                            src={data.to ? data.to.Photos[0].url : data.from.Photos[0].url}
                        >
                        </Avatar>
                    }
                    action={data.from ?
                        <Tooltip title="Accept this request">
                            <IconButton aria-label="settings"
                            onClick={()=>handleAcceptFriendRequest()}
                            >
                                <PersonAddIcon />
                            </IconButton>
                        </Tooltip>
                        :
                        <Tooltip title="request pending">
                            < IconButton aria-label="settings">
                                <PersonAddDisabledIcon />
                            </IconButton>
                        </Tooltip>

                    }
                    title={data.to ? `${data.to.firstName} ${data.to.lastName}` : `${data.from.firstName} ${data.from.lastName}`}
                    subheader={data.to ? data.to.email : data.from.email}
                />
            </Card>
        )
    } 
    return (
        <Card className={!data.pending ? classes.root : classes.root2}>
            <button onClick={() => console.log(data)}>console</button>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}
                        src={data.to ? data.to.Photos[0].url : data.from.Photos[0].url}
                    >
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MessageIcon />
                    </IconButton>
                }
                title={data.to ? `${data.to.firstName} ${data.to.lastName}` : `${data.from.firstName} ${data.from.lastName}`}
                subheader={data.to ? data.to.email : data.from.email}
            />
        </Card>
    );
}






// import React,{useState, useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// // import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// // import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import style from "./style.css"
// import { useDispatch } from 'react-redux';
// // import {grabPlaceById, grabPlaceByIdThunk} from "../../components/store/actions/entities/entities"
// import { grabUserInformationByUserIdThunk } from "../../components/store/actions/entities/entities"
// import { CURRENT_USER } from "../../components/store/actions/sessions/currentUser"
// import CardHeader from '@material-ui/core/CardHeader';
// import Avatar from '@material-ui/core/Avatar';
// const useStyles = makeStyles({
//   root: {
//     width: 360,
//     height: 200,
//     borderRadius:'20pt',
//     margin:10
//   },
//   media: {
//     height: 200,
//   },
// });

// export default function ViewFriendsList({data}) {
//     const dispatch = useDispatch()
//     const [loaded, setLoaded] = useState(false)


//   const classes = useStyles();

//   useEffect(()=>{

//     setLoaded(true)

//   },[])
//   if (!loaded) {
//     return null
// }
//   return (
//     <Card className={classes.root}

//     >
//         <button
//         onClick={()=>console.log(data)}
//         > console</button>
//         <CardHeader

//         >

//         </CardHeader>
//       <CardActionArea>
//       <div >
//         <CardMedia
//           className={classes.media}
//           className="imgTag"
//           image={data.to ? data.to.Photos[0].url: data.from.Photos[0].url}
//         />

//          <div className="img__description__profile">
//              <Typography
//              variant="h6"
//              className="onHoverText"
//   > 

//       </Typography>
//          </div>
//         </div>

//         <CardContent>

//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
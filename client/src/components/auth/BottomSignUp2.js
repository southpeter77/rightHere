import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import ImageSignUp2 from "./ImageSignUp2"
import animation from "./animation/animation"
import { Link as Scroll } from "react-scroll"
import { IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "center",
        // maxWidth:"500px"
        flexWrap: "wrap"
    },
        arrowDown: {
        color: 'white',
        fontSize: "4rem"
    }
}))

const intro1 = {
    title: 'Take a photo of your memory',
    // desc: "",
    img: "/uploadPicture5.jpg"
}
const intro2 = {
    title: 'Share it with your location',
    // desc: "asdfasdf",
    img: "/photoUpload1.jpeg"
}
const intro3 = {
    title: 'Be the place owner',
    // desc: "asdfasdf",
    img: "/building.jpeg"
}
const intro4 = {
    title: 'Let your friends know you were right here!',
    // desc: "asdfasdf",
    img: "/friend.jpeg"
}

export default function () {
    const classes = useStyles();
    const checked = animation('header')

    return (
<>


        <div className={classes.root} id="place-to-visit">
            
            <ImageSignUp2 intro={intro1} checked={checked}></ImageSignUp2>
            <ImageSignUp2 intro={intro2} checked={checked}></ImageSignUp2>
            <ImageSignUp2 intro={intro3} checked={checked}></ImageSignUp2>
            <ImageSignUp2 intro={intro4} checked={checked}></ImageSignUp2>

            {/* <ImageSignUp2 intro={intro1}></ImageSignUp2>
            <ImageSignUp2 intro={intro1}></ImageSignUp2> */}

        </div>




</>
    )
}

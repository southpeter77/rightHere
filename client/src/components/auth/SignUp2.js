import React, { useState, useEffect } from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/actions/user"
// import MovingImages2 from "./MovingImages2"
// import Info from "./Info"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IconButton } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import BottomSignUp2 from "./BottomSignUp2"
import { Link as Scroll } from "react-scroll"
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        // margin: theme.spacing(5),
        // margin: theme.spacing(5, 30)
    },
    image: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/photo1.jpg'})`,
        backgroundRepeat: 'no-repeat',
        // opacity: '0.8',
        backgroundSize: 'cover',
        maxWidth: "70%",
        // backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(5, 2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        margin: theme.spacing(5),
    },
    submit: {
        width: "100%",
        margin: theme.spacing(1, 0, 2),
    },
    sticky: {
        background: 'white',
        position: '-webkit-sticky',
        position: 'fixed',
        left: '70%',
        top: 0,
        bottom: 0,
        // paddingTop: '40px',
        // paddingBottom: '40px',
        zIndex: 5,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        height: '100vh',
        // color:"#fff",
    },
    titleHeader: {
        fontWeight: 'bold',
        color: "white"
    },
    logoImage: {
        height: "110px",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/rightHereLogo.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: "0 auto",
        width: "120px"
    },
    arrowDown: {
        color: 'white',
        fontSize: "4rem"
    }
}));

const SignUp = () => {
    // console.log(process.env.PUBLIC_URL)
    const signUpErrors = useSelector(state => state.errors.signUpErrors)
    const classes = useStyles();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [biography, setBiography] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()
    const updateProperty = (callback) => (e) => {
        callback(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            firstName, lastName, email, biography, password, confirmPassword
        }
        //  console.log(payload)
        dispatch(signUp(payload))
    }

    useEffect(() => {
        setCheck(true)
    })


    return (
        <>
            <CssBaseline />
            <Grid container className={classes.root}>

                <Grid container
                    spacing={0}
                    // alignItems="center"
                    // justify="center"
                    style={{ minHeight: "100vh" }}  >


                    <Grid item xs={false} sm={12} md={14} elevation={4} style={{ position: "relative" }}>
                        <div className={classes.image}>
                            <Collapse in={check}
                                {...(check ? { timeout: 0 } : {})} collapsedHeight={30}
                            >

                                <div className={classes.title} id="header">
                                    <div className={classes.logoImage} />
                                    <Typography variant="h4" className={classes.titleHeader}>Welcome To<br></br><Typography align="center" variant="h4" className={classes.titleHeader}>Right Here</Typography></Typography>
                                    <Scroll to="place-to-visit" smooth={true}>
                                        <IconButton>
                                            <KeyboardArrowDownIcon className={classes.arrowDown}></KeyboardArrowDownIcon>
                                        </IconButton>
                                    </Scroll>
                                </div>
                            </Collapse>
                            <BottomSignUp2></BottomSignUp2>


                        </div>

                    </Grid>



                    <Grid item xs={12} sm={6} md={4} elevation={1} square className={classes.sticky}>
                        <div className={classes.paper} >
                            {/* <img style={{ height: 100, width: "auto", margin: "auto" }} src="/rightHereLogo.png" /> */}
                            <Typography style={{ fontWeight: "bold" }} align="center" variant="h4" color="primary">SIGN UP</Typography>
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            value={firstName}
                                            onChange={updateProperty(setFirstName)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            value={lastName}
                                            onChange={updateProperty(setLastName)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            value={email}
                                            onChange={updateProperty(setEmail)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            multiline
                                            rows={3}
                                            id="biography"
                                            label="About me (optional)"
                                            name="biography"
                                            value={biography}
                                            onChange={updateProperty(setBiography)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={updateProperty(setPassword)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            type="password"
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            onChange={updateProperty(setConfirmPassword)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                </Grid>
                                {signUpErrors.length>0 ?
                                <>
                                {signUpErrors.map(error=>{
                                    return (
                                        <Typography 
                                        variant="subtitle2"
                                        style={{color:"crimson"}}
                                        >{error}</Typography>
                                    )
                                })}
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                                onClick={handleSubmit}
                                style={{backgroundColor:'crimson'}}
                            >Sign Up</Button>
                            </>
                            :
                            <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleSubmit}
                                >Sign Up</Button>
                            }
                                

                                <Grid item>
                                    <Typography variant="body2" color="textSecondary" align="center">

                                        <Link href="/login" variant="body2">
                                            Already have an account? Log In
              </Link>
                                    </Typography>

                                </Grid>
                                <Box mt={5}>
                                    <Typography variant="body2" color="textSecondary" align="center">
                                        Right Here 2020
    </Typography>
                                </Box>
                            </form>
                        </div>
                    </Grid>

                </Grid>
            </Grid>
        </>
    );
}



export default SignUp 
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { login } from "../store/actions/user"
import { useDispatch, useSelector } from "react-redux";
import MovingImages from "./MovingImages"
import LoginErrors from "./LoginErrors"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    // margin: theme.spacing(5),
    margin: theme.spacing(5, 30)
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(5, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    margin: theme.spacing(5),
  },
  submit: {
    width: "100%",
    margin: theme.spacing(1, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [loginErrors, setLoginErrors]= useState([])
  const dispatch = useDispatch()
  const demoLogin = () => {
    // setEmail("demo@demo.com")
    // setPassword('123')
    demoLoginEmailTyper()
  }
  const loginErrors = useSelector(state => state.errors.loginErrors)
  const demoLoginEmailTyper = () => {
    let emailField = document.getElementById("email")
    emailField.focus();
    let demoEmail = 'demo@demo.com';
    let emailCount = 0
    let typingDemoEmail = ''
    let typingEmail = setInterval(() => {
      if (emailCount == demoEmail.length - 1) {
        clearInterval(typingEmail)
        demoLoginPasswordTyper()
      }
      typingDemoEmail += demoEmail[emailCount]
      setEmail(typingDemoEmail)
      emailCount++;
    }, 150)
  }
  const demoLoginPasswordTyper = () => {

    let passwordField = document.getElementById("password")
    passwordField.focus()
    let demoPassword = "123";
    let passwordCount = 0;
    let typingDemoPassword = ''
    let typingPassword = setInterval(() => {
      if (passwordCount == demoPassword.length - 1) {
        clearInterval(typingPassword)
        const payload = {
          email: 'demo@demo.com', password: '123'
        }
        dispatch(login(payload))
      }
      typingDemoPassword += demoPassword[passwordCount];
      setPassword(typingDemoPassword)
      passwordCount++;
    }, 500)
  }



  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      email, password
    }
    dispatch(login(payload))
  }
  return (
    <>
      <Grid container>
        {/* <button
      onClick={()=>console.log(loginErrors)}
      >errors</button> */}
        <CssBaseline />
        <Grid container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}  >


          <Grid item xs={false} sm={12} md={4} elevation={0} >
            <MovingImages></MovingImages>
          </Grid>



          <Grid item xs={false} sm={6} md={4} elevation={1} square >
            <div className={classes.paper}>
              <img style={{ height: 100, width: "auto", margin: "auto" }} src="/rightHereLogo.png" />
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  errorMessages={["Provide Email"]}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={updateProperty(setEmail)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  errorMessages={["Provide Password"]}
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={updateProperty(setPassword)}
                />

                {loginErrors.length > 0
                  ? <>
                    {loginErrors.map(error => {
                      return (<>
                        <Typography style={{ color: "crimson" }}>{error}</Typography>
                      </>)
                    })}
                    <><Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      // color="primary"
                      className={classes.submit}
                      onClick={handleSubmit}
                      style={{ backgroundColor: 'crimson' }}
                    >
                      Log In
          </Button>
          <Button 
                    onClick={() => demoLogin()} 
                    style={{ cursor: "pointer" }}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    >
                      Demo Login
                    </Button>
                  </></>
                  : <><Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                  >
                    Log In
            </Button>
                    <Button 
                    onClick={() => demoLogin()} 
                    style={{ cursor: "pointer" }}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    >
                      Demo Login
                    </Button>
                  </>
                }



                <Grid container>
                  <Grid item xs />

                  <Grid item xs={8}>
                    <Typography variant="body2" color="textSecondary" align="center">

                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" align="center" onClick={() => demoLogin()} style={{ cursor: "pointer" }}>
                      {"Demo Login"}
                    </Typography> */}

                  </Grid>
                  <Grid item xs />

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



export default Login 
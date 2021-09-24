import React, {useState} from 'react';
import  {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Grid,Avatar,TextField,Button} from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { SignIn, SignUpProvider } from "../helpers/firebase";


const useStyles = makeStyles({
    container:{
        backgroundImage: `url(${"https://picsum.photos/1200/900"})`,
        backgroundSize:"100% 100%",
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems:"center",
        justifyContent:"center"
        
    },
    formLogin:{
        maxWidth: "40%",
        minHeight: "20vh",
        background: "white",
        borderRadius:"10px",
        padding: "10px",
        boxShadow:"10px 10px 5px 0px rgb(0 0 0 / 75%)"
    },
    paper:{
        padding:20,
        height: '70vh',
        width:"380px",
        margin:"20px auto"
    },
    avatar:{
        backgroundColor:"#1B6682",
    },
    google:{
        color: "red"
    }
})

const Login = () =>{
    

    const history = useHistory();

    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleProviderLogin = ()=>{
        SignUpProvider();
    }

    const handleLogin =  () => {
        const user = {email, password}
        SignIn(user.email, user.password);
       
    }

    return(
        <Grid className={classes.container}>
            <Grid container spacing={3} className={classes.formLogin}>
                <Grid item xs={12}>
                    <Grid align="center">
                        <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic" type="email" label="Email" variant="standard" placeholder="Enter Email" fullWidth required
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </Grid>  
                <Grid item xs={12}>
                    <TextField id="standard-basic" label="Password" variant="standard" placeholder="Enter Password" type="password" fullWidth required
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </Grid> 
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleLogin}
                        >
                        Login
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={()=>history.push("/register")}
                        >
                        REGISTER
                    </Button>
                </Grid> 
                <Grid item xs={12}>
                
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<GoogleIcon/>}
                        onClick={handleProviderLogin}
                        >
                        
                        Continue with Google
                    </Button>
                  
                </Grid>  
            </Grid>
        </Grid>
    )
}

export default Login

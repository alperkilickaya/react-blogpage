import React, {useState} from 'react';
import NavBar from '../components/AppBar'
import  {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Grid,Avatar,TextField,Button} from '@material-ui/core';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { createUser, SignUpProvider } from "../helpers/firebase";


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
        maxWidth: "350px",
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
        width: "100px",
        height: "100px",
    },
    google:{
        color: "red"
    }
})

const Login = () =>{

    const history = useHistory();

    const classes = useStyles();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleProviderRegister = ()=>{
        SignUpProvider();
        history.push('/');
    }

    const handleRegister = () => {
        const user = {firstName, lastName, email, password}
        const displayName= `${firstName} ${lastName}`
        createUser(user.email, user.password, displayName)
        history.push("/")

    }

    return(
        <>
        <NavBar />
        <Grid className={classes.container}>
            <Grid container spacing={3} className={classes.formLogin}>
                <Grid item xs={12}>
                    <Grid align="center">
                        <Avatar className={classes.avatar}><AssignmentIndRoundedIcon sx={{fontSize:50}}/></Avatar>
                        <h2>Sign UP</h2>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic" type="text" label="Firstname" variant="standard" placeholder="Enter Firstname" fullWidth required
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
                </Grid> 
                <Grid item xs={12}>
                    <TextField id="standard-basic" type="text" label="Lastname" variant="standard" placeholder="Enter Lastname" fullWidth required
                    onChange={(e)=>setLastName(e.target.value)}
                    />
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
                        onClick={handleRegister}
                        >
                        SIGN UP
                    </Button>
                </Grid>
                <Grid item xs={12}>
                
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<GoogleIcon/>}
                        onClick={handleProviderRegister}
                        >
                        
                        Register with Google
                    </Button>
                  
                </Grid>  
            </Grid>
        </Grid>
        </>
    )
}

export default Login

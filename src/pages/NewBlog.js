import React, {useState} from 'react';
import  {useHistory} from 'react-router-dom';
import NavBar from '../components/AppBar'
import { makeStyles } from '@material-ui/core';
import { Grid,Avatar,TextField,Button} from '@material-ui/core';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { addBlog } from '../helpers/functions';
import uuid from 'react-uuid'

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
        maxWidth: "400px",
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

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    
    const handleBlog = (e) => {
        e.preventDefault();
        const id = uuid();
        const newBlog = { id, title, image, content};
        history.push("/");
        addBlog(newBlog);
       
    };
   

    return(
        <>
        <NavBar />
        <Grid className={classes.container}>
            <Grid container spacing={3} className={classes.formLogin}>
                <Grid item xs={12}>
                    <Grid align="center">
                        <Avatar className={classes.avatar}><AssignmentOutlinedIcon sx={{fontSize:50}} /></Avatar>
                        <h2>Add Blog</h2>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic" type="text" label="Title" variant="outlined" placeholder="Enter Title" fullWidth required
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </Grid>  
                <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    variant="outlined" 
                    placeholder="Upload Image" 
                    type="file" 
                    fullWidth required
                    onChange={(e)=> setImage(e.target.files[0])}
                    />
                </Grid> 
                <Grid item xs={12}>
                    <TextField id="standard-basic" 
                    multiline
                    rows={8}
                    label="Write Content" 
                    variant="outlined" 
                    placeholder="Enter Content" 
                    
                    fullWidth required
                    onChange={(e)=> setContent(e.target.value)}
                    />
                </Grid> 
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleBlog}
                        >
                        Add Blog
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Login

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { AuthContext } from "../context/AuthContext";
import NavBar from '../components/AppBar'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography

} from "@material-ui/core";
import Button from '@mui/material/Button';


const useStyles = makeStyles({
  detailContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#b3f0f9",
    minHeight:"100vh",
    padding:"20px 0"
    

  },
  detailItem:{
    boxShadow:"10px 10px 5px 0px rgb(0 0 0 / 75%)",
  }
})

const BlogDetail = () => {
  const classes = useStyles();
  const history = useHistory();
  const { blogCard } = useContext(AuthContext);
  const { id, title, image, content, url } = blogCard;

  const goBack = ()=>{
    history.push("/")
  }
  return (
    <>  
    <NavBar/>
    <Grid container className={classes.detailContainer}>
      <Grid item xs={10} md={8} lg={6}>
          <Card sx={{ display: 'flex' }} className={classes.detailItem}>
              <CardMedia
                  component="img"
                  sx={{ width: "50%", display: { xs: 'block', sm: 'block' } }}
                  image={url}
                  alt={image}
                  />
              <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                  {title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                  {content}
              </Typography>
              </CardContent>
              <Button 
                variant="contained"
                onClick={goBack}
                sx={{marginBottom:"10px"}}
              >
                HomePage
              </Button>
             
              
          </Card>
      </Grid>
  </Grid>  
    </>
)};

export default BlogDetail;

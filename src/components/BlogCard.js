import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import { useFetch } from '../helpers/functions';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    blogContainer:{
        backgroundImage: `url(${"https://picsum.photos/1200/900"})`,
        backgroundSize:"100% 100%",
        height: "100vh",        
    },
    link:{
        textDecoration: "none"
    }
})

export default function BlogCard() {

    const {currentUser,setBlogCard} = useContext(AuthContext);
    const {blogList} = useFetch();
    const classes = useStyles();

    const handleBlogDetail = (item) =>{
        setBlogCard(item)
        console.log(item) 
    }
  return (
    <Grid container spacing={0} className={classes.blogContainer}>
        {blogList.map((item) => {
            return (
            <Grid item xs={12} sm={6} md={4} >
                <div style={{padding:"40px"}}>
                <Card key={item.id} >
                    <CardHeader
                      title={item.title}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={item.url}
                        alt={item.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {item.content?.length < 200
                          ? item.content
                          : item.content.slice(0, 200) + "..."}
                        </Typography>
                    </CardContent>
                    <Link
                    className={classes.link}
                    to={currentUser ? `/blog/${item.id}` : "/login"}
                    >
                    <Button 
                    variant="contained" 
                    
                    onClick={()=> handleBlogDetail(item)}
                    >
                    Read More
                    </Button>
                    </Link>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                </div>
            </Grid>
      );
    })}
    </Grid>
   
  );
}

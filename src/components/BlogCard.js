import * as React from 'react';
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
import { makeStyles } from '@material-ui/core';
import { useFetch } from '../helpers/functions';


    const number = [1,2,3,4,5,6,7]


    const useStyles = makeStyles({
        blogContainer:{
            backgroundImage: `url(${"https://picsum.photos/1200/900"})`,
            backgroundSize:"100% 100%",
            height: "100vh",
           
            
        }
    })


export default function BlogCard() {

    const {blogList} = useFetch();

    const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.blogContainer}>
        {blogList.map((item) => {
            return (
            <Grid item xs={12} sm={6} md={4} >
                <div style={{padding:"40px"}}>
                <Card key={item.id} >
                    <CardHeader>{item.title}</CardHeader>
                    <CardMedia
                        component="img"
                        height="194"
                        image={item.image}
                        alt={item.image}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {item.content}
                        </Typography>
                    </CardContent>
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

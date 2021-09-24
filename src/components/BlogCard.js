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

    const number = [1,2,3,4,5,6,7]


    export default function RecipeReviewCard() {


  return (
    <Grid container spacing={0}>
        {number.map((el,index) => {
            return (
            <Grid item xs={12} sm={4} >
                <div style={{padding:"40px"}}>
                <Card key={index} >
                    <CardHeader
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
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

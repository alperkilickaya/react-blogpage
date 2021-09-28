import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NavBar from '../components/AppBar'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography

} from "@material-ui/core";

const BlogDetail = () => {
  const history = useHistory();
  const { blogCard, currentUser } = useContext(AuthContext);
  const { id, title, image, content, url } = blogCard;
  return (
    <>  
    <NavBar/>
    <Grid container sx={{padding:"100px"}}>
      <Grid item xs={12}>
          <Card sx={{ display: 'flex' }}>
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
          </Card>
      </Grid>
  </Grid>  
    </>
)};

export default BlogDetail;

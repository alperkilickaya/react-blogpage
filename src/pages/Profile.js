import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import NavBar from "../components/AppBar";
import { AuthContext } from "../context/AuthContext";

const useStyles = makeStyles({
  homepage:{
      textDecoration:"none",
      marginTop:"20px"    
  }
})


export default function Profile() {
  const classes = useStyles();
  const {currentUser} = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <main>
        <Container sx={{ my: "10%" }} maxWidth="sm" align="center">
          <Grid container justify="center">
            <Grid item md={12} xs={12}>
              <Box
                sx={{
                  backgroundColor: "white",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems:"center",
                  justifyContent:"space-around"
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="subtitle2" align="center">User Profile</Typography>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    width="100"
                    height="100"
                    alt="profile"
                  />
                </Box>
                <Box sx={{ p: 1 }}>
                  <Typography variant="subtitle2">Display Name</Typography>
                  <Typography variant="h6">{currentUser.displayName}</Typography>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Typography variant="subtitle2">Email</Typography>
                  <Typography variant="h6">{currentUser.email}</Typography>
                </Box>
              </Box>
              <Link
              className={classes.homepage}
              to="/"
              >
              <Button 
                sx={{marginTop:"20px"}}
                variant="contained" 
                >
                Home Page
              </Button>
              </Link>
  
            </Grid>
            
          </Grid>
         
        </Container>
      </main>
    </>
  );
}

import React, {useContext} from 'react';
import logo from '../../src/logo.svg'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext'
import {Logout} from '../helpers/firebase'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const useStyles = makeStyles({
    toolbar:{
        backgroundColor: "#1B6682",
    },
    logo:{
        width: "60px"
    }

})

const MenuAppBar=()=> {

  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Logout()
    history.push("/");

  }

  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={()=>history.push("/")}
            >
            <img src={logo} alt=""  className={classes.logo} />
          </IconButton>

          <Typography align="start" variant="h6" component="div" sx={{cursor:"pointer" }}
            onClick={()=>history.push("/")}
          >
            <span>Tatangalar</span> 
          </Typography>
          <Typography align="start" variant="h6" component="div" sx={{ flexGrow: 1 }}
            
          ></Typography>

          {currentUser ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={()=>history.push("/newblog")}>Add Blog</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ):(
            <Stack direction="row" spacing={2}>
              <Button variant="contained" startIcon={< LoginIcon/>} 
              
              onClick={()=>history.push("/login")}
              >
              Login
              </Button>
              <Button variant="contained" endIcon={<PersonAddIcon />} 
              color="error"
              onClick={()=>history.push("/register")}
              >
                Register
              </Button>
           </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuAppBar;
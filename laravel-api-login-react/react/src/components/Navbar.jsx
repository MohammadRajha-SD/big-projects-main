import React, { useEffect, useState } from 'react'
import {useStateContext} from '../contexts/ContextProvider.jsx'
import {
    AppBar,
    Toolbar,
    Menu,
    MenuItem,
    styled,
    Typography,
    InputBase,
    Avatar,
    Box
} from '@mui/material';

import { Code } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';

const StyledSearch = styled("div")(({theme}) => ({
    background: theme.palette.background.default,
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
})); 

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap:"15px",
    alignItems: "center"
}));

const StyledLink = styled(Link)(({theme}) => ({
    color: '#fff',
    textDecoration:'none',
    transition: '.3s',
    ":hover": {
        scale: '1.1',
        color: '#ddd',
    }
}));

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
}));


const Navbar = ({mode}) => {
    // const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const {user, token, setUser, setToken, setNotification} = useStateContext()

    useEffect(() => {
        if(token) {
            axiosClient.get('/user').then(({data}) => {
                setUser(data);
            });
        }
    }, []);

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('logout')
        .then(() => {
            setUser({})
            setToken(null)
            setAnchorEl(null)
            setNotification('Logout Successfully!.')
            // setOpen(false)
       });
    }
    const handleClick = (e) => {
        // setOpen(true);
        setAnchorEl(e.currentTarget)
    }
    const handleClose = (e) => {
        // setOpen(false)
        setAnchorEl(null)
    }
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            {/* User Name */}
            <Typography variant='h6' component="div" sx={{ 
                display: {xs: "none", sm:"block"}
             }} >Logo</Typography>

             <Code titleAccess='Coder.. ' sx={{ 
                display: {xs: "block", sm:"none"}
             }} />

            {/* Search */}
            {token &&
                <StyledSearch>
                    <InputBase placeholder='Search here...' />
                </StyledSearch>
            }

             {/* User Menu */}
             {token &&
                <UserBox >
                    <Typography variant='h6' sx={{ 
                        display: {xs: "none", sm:"block"},
                        fontSize: '14px',
                        fontWeight: 'bold',
                        userSelect: 'none',
                        cursor: 'pointer'
                    }}>
                        Welcome, {user.name}
                    </Typography>
                    <Avatar
                        onClick={handleClick}
                        sx={{ width: 30, height: 30 }}
                        alt="Travis Howard"
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    
                </UserBox> }

                {!token &&
                <UserBox>
                    <StyledLink to={'/login'}>Login</StyledLink>
                    <StyledLink to={'/signup'}>Signup</StyledLink>
                </UserBox>}
        </StyledToolbar>
        {token &&
            <Menu 
                xs={{
                    display: {xs: "none", sm:"block"},
                }}
                open={Boolean(anchorEl)} 
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                <MenuItem component="a" href="/profile"> Profile </MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem component="a" href="#" onClick={onLogout}> Logout</MenuItem>
            </Menu>
        }
    </AppBar>
  )
}

export default Navbar;
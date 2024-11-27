import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@mui/material';
import memories from '../../images/memories.png';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {
    const classes = useStyles();
    //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        setUser(null);
    };

    useEffect(() => {
        // Optionally update user state if the localStorage value changes
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>
                    Memories Capturer
                    <img src={memories} className={classes.image} alt='memories' height='60'>
                    </img>
                </Typography>  

                <Toolbar className={classes.toolbar}>
                    {user && user.result ? (
                        <div className={classes.profile}>
                            <Avatar
                                className={classes.purple}
                                alt={user.result.name}
                                src={user.result.imageUrl || ''}
                            >
                                {user.result.name?.charAt(0)}
                            </Avatar>
                            <Typography className={classes.userName} variant="h6">
                                {user.result.name}
                            </Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">
                            Sign In
                        </Button>
                    )}
                </Toolbar>

                
            </div>
        </AppBar>
    )
}

export default Navbar;
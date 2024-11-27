import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup, signin } from '../../actions/auth';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setshowPassword] = useState(false);
    const [isSignUp, setisSignUp] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setshowPassword((prev) => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData, navigate))
        }
        else {
            dispatch(signin(formData, navigate))
        }
        //console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setisSignUp((prev) => !prev);
        setshowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <br/>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    &nbsp;
                    <GoogleOAuthProvider clientId="751459069091-05u7nl1p2b495j8r53oov6sc9r2q08i3.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse)
                                console.log('Token:', credentialResponse.credential);

                                const decoded = jwtDecode(credentialResponse.credential);
                                console.log('Decoded User:', decoded);

                                // Dispatch the user details to Redux or use them as needed
                                dispatch({ type: 'AUTH', data: { result: decoded, token: credentialResponse.credential } });
                                navigate('/');
                                //dispatch({ type: 'AUTH', data: { token: credentialResponse.credential } });
                            }}
                            onError={() => console.log('Google Sign-In was unsuccessful. Try Again Later.')}
                        />
                    </GoogleOAuthProvider>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>{isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;

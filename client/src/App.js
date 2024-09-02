import React, { useState,useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png'
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
//import useStyles from './styles.js'
import { useDispatch } from 'react-redux';

const App = () => {
    //const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId,dispatch]);
    return (
        <Container maxwidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>
                    Memories Capturer
                    <img src={memories } alt='memories' height='60'>
                    </img>
                </Typography>
            </AppBar>
            &nbsp;
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => (
    <BrowserRouter>
            <Container maxwidth='lg'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />

                </Routes>
            </Container>
    </BrowserRouter> 
    
)

export default App;
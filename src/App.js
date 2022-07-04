import React from 'react';
import{Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

import './App.css';

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
      <NavBar />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
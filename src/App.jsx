import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { Home } from './pages/Home';
import { ExerciseDetail } from './pages/ExerciseDetail';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import './App.css';

export const App = () => {
  return (
    <Box
      className="App"
      width="400px"
      sx={{ width: { xl: '1488px' } }}
      m="auto"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>

      <Footer />
    </Box>
  );
};
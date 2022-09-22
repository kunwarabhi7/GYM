import {Route , Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import NavBar from './componets/NavBar'

import './App.css'
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Footer from './componets/Footer';

function App() {
  return (
    <Box width='400px' sx={{width:{xl:'1448px'}}} m='auto'>
     <NavBar />
     <Footer />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise/:id' element={<ExerciseDetails />} />
     
     </Routes>
    </Box>
  );
}

export default App;

import logo from './logo.svg';
import React from 'react';
import { Homepage } from './components/Homepage/Homepage';
import { Films } from './components/Films/Films';
import { Planets } from './components/Planets/Planets';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route  path='/' element={<Homepage />} />
          <Route  path='/Planets' element={<Planets />} />
          <Route  path='/Films' element={<Films />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

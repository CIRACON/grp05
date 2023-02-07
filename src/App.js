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
import { PersonInfo } from './components/People/PersonInfo';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route  path='/' element={<Homepage />} />
          <Route  path='/PersonInfo/:id' element={<PersonInfo />} />
          <Route  path='/Planets/:id' element={<Planets />} />
          <Route  path='/Films/:id' element={<Films />} />
        </Routes>
      </>
    </Router>

  );
}

export default App;

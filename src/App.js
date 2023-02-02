import logo from './logo.svg';
import React from 'react';
import { Homepage } from './components/Homepage/Homepage';
import { Films } from './components/Films/Films';
import { Planets } from './components/Planets/Planets';
import './App.css';

function App() {
  return (
    <>
    <h1>Star Wars Universe Lookup</h1>
    <Homepage/>
    <Films/>
    <Planets/>
    </>
  );
}

export default App;

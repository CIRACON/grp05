import logo from './logo.svg';
import React from 'react';
import { Homepage } from './components/Homepage/Homepage';
import { Films } from './components/Films/Films';
import { Planets } from './components/Planets/Planets';
import './App.css';
import { PersonInfo } from './components/People/PersonInfo';

function App() {
  return (
    <>
    <h1>Star Wars Universe Lookup</h1>
    <Homepage/>
    <Films/>
    <Planets/>
    <PersonInfo id={1}/>
    </>
  );
}

export default App;

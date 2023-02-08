import logo from './logo.svg';
import './App.css';
import React from 'react';
import { LoginPage } from './components/LoginPage/LoginPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <h2>App</h2>
        <Routes>

          <Route path='/' element={<LoginPage />} />

        </Routes>
      </>
    </Router>
  );
}

export default App;

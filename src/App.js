import logo from './logo.svg';
import '@fontsource/roboto'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ** COMPONENT IMPORTS ** //
import { LoginPage } from './components/LoginPage/LoginPage';
import { Home } from './components/Home/Home';
import { EmployeeProfile } from './components/EmployeeProfile/EmployeeProfile';

function App() {
  return (
    <Router>
      <>
        <Routes>

          <Route path='/' element={<LoginPage />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/employeeprofile' element={<EmployeeProfile />} />

        </Routes>
      </>
    </Router>
  );
}

export default App;

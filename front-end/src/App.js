import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import Homepage from './pages/Homepage/Homepage'
import Associations from './pages/Associations/Associations'
import Categories from './pages/Categories/Categories'
import Login from './pages/Login/Login'
import AboutUs from './pages/AboutUs/AboutUs'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<SignIn />} /> 
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/associations" element={<Associations />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/login" element={< Login/>} />
          <Route exact path="/aboutUs" element={< AboutUs/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

// Router : c'est de la que part les pages. Ce code configure le routage pour une application React, permettant la navigation entre différentes pages en fonction des URL correspondantes.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Homepage from './pages/Homepage';
import Associations from './pages/Associations';
import Categories from './components/Categories';
import AboutUs from './pages/AboutUs';
import DetailsProfile from './pages/DetailsProfile';
import LoginForm from './pages/LoginForm';
//import './App.css'
import TestAssoDatabase from './pages/TestAssoDatabase';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/associations" element={<Associations />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/details/:id" element={<DetailsProfile />} />
        <Route exact path="/test" element={<TestAssoDatabase />} />
      </Routes>
    </Router>
  );
}
export default App;

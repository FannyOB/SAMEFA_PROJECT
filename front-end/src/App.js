import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Homepage from './pages/Homepage/Homepage';
import Associations from './pages/Associations/Associations';
import Categories from './components/Categories/Categories';
import Login from './pages/Login/Login';
import AboutUs from './pages/AboutUs/AboutUs';
import DetailsProfile from './pages/DetailsProfile/DetailsProfile';
//import './App.css'

//name of database: SAMEFA
//password of Supabase: dxEDLt0RnWj0Dpzk

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/associations" element={<Associations />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/details/:id" element={<DetailsProfile />} />
      </Routes>
    </Router>
  );
}
export default App;

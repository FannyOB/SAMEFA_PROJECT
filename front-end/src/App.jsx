// Router : c'est de la que part les pages. Ce code configure le routage pour une application React, permettant la navigation entre différentes pages en fonction des URL correspondantes.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';
import SignUp from './pages/SignupForm.jsx';
import Homepage from './pages/Homepage.jsx';
import DetailsProfile from './pages/DetailsProfile.jsx';
import LoginForm from './pages/LoginForm.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/details/:id" element={<DetailsProfile />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import LandingPage from './pages/LandingPage/Landing';
import Ngo from './pages/Ngo';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/landing" element={<LandingPage />} />
          <Route exact path="/ngo" element={<Ngo />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

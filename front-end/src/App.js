import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Homepage from './pages/Homepage/Homepage';
import Ngo from './pages/Ngo/Ngo';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<SignIn />} /> 
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/ngo" element={<Ngo />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

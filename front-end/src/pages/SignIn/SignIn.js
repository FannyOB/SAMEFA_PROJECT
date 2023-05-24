import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate('/landing');
  }
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleClick}>Click here please</button>
    </div>
  );
};

export default SignIn;

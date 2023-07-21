import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate('/homepage');
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={handleClick}>Click here please</button>
    </div>
  );
};

export default SignUp;

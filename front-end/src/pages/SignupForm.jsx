// COMPOSANT A REFACTORISER PAR FANNY
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/pages/SignupForm.scss';
import axios from 'axios';
import logo from '../assets/img/logo_trans.png';
import FormInput from '../components/FormInput.jsx';
import { useAuth } from '../AuthContext.jsx';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate(); // 2. Use useNavigation hook
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', {
        email,
        password,
        name,
      });
      if (response.status === 200) {
        console.log(response.data.message);
        localStorage.setItem('token', response.data.token);
        signup();
        navigate('/');
      } else {
        console.error('Error:', response.data.message);
        // Gérer les autres statuts de réponse (non-200)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container">
      <div className="auth-form">
        <img src={logo} alt="Samefa-logo" />
        <div className="login-container">
          <Link to="/login" className="login-link">
            Already have an account ? Login here.
          </Link>
          {/* sign up form  */}
          <form onSubmit={handleSubmit}>
            <FormInput
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              id="name"
              name="name"
              label="Name"
            />
            <FormInput
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              id="email"
              name="email"
              label="Email"
            />
            <FormInput
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              label="Password"
            />
            <button type="submit" className="form-submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

// COMPOSANT A REFACTORISER PAR FANNY
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Register.scss';
import axios from 'axios';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import logo from '../assets/img/logo_trans.png';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate(); // 2. Use useNavigation hook

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
        navigate('/login');
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
            <div className="form-group">
              <AiOutlineUser />
              <label htmlFor="name" className="label-with-icon">
                Name
              </label>
              <input
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                id="name"
                name="name"
              />
            </div>
            <div className="form-group">
              <AiOutlineMail />
              <label htmlFor="name" className="label-with-icon">
                Email
              </label>
              <input
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <AiOutlineLock />
              <label htmlFor="name" className="label-with-icon">
                Password
              </label>
              <input
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
            </div>
            <button type="submit" className="form-submit">
              Sign up
            </button>
          </form>
        </div>
        {/* sign up form  */}
      </div>
      {/* <div className='signup-image'>
      <img src={samefalogo} alt='two girls coding'/>
      </div> */}
    </div>
  );
};

export default SignUpForm;

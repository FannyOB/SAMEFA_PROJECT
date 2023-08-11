import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineLock} from 'react-icons/ai';
import samefalogo from '../../assets/img/samefalogo.png';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }

    return (
    <div className='container'>
      <div className='auth-form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
          <AiOutlineUser/>
            <label htmlFor='name'className='label-with-icon'>
            Name
            </label>
              <input
                className='input-field' 
                value={name} 
                onChange ={(e) => setName(e.target.value)} 
                type='text' 
                placeholder='Your Name' 
                id='name' 
                name='name'/>
          </div>

        <div className='form-group'>
          <AiOutlineMail/>
          <label htmlFor='name'className='label-with-icon'>
          Email
          </label>
            <input 
            className='input-field' 
            value={email} 
            onChange ={(e) => setEmail(e.target.value)} 
            type='email' 
            placeholder='Your Email' 
            id='email' 
            name='email'/>
        </div>
      
        <div className='form-group'>
          <AiOutlineLock/>
          <label htmlFor='name'className='label-with-icon'>
          Password
          </label>
            <input 
            className='input-field' 
            value={pass} 
            onChange ={(e) => setPass(e.target.value)} 
            type='password' 
            placeholder='Password' 
            id='password' 
            name='password'/>
        </div>

        <button type='submit' className='form-submit'>Sign up</button>
      </form>  
    </div>

    <div className='signup-image'>
      <img src={samefalogo} alt='two girls coding'/>
        <div className='login-container'>
          <Link to ="/login" className='login-link'>
            Already have an account? Login here.
          </Link>
        </div>
      </div>
  </div>
    );
};

export default SignUpForm;
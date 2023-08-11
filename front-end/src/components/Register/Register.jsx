import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineLock} from 'react-icons/ai';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }

    return (
    <div className='auth-form'>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <AiOutlineUser/>
          <input value={name} onChange ={(e) => setName(e.target.value)} type='text' placeholder='Full name' id='name' name='name'/>
        </div>

        <div class="form-group">
          <AiOutlineMail/>
          <input value={email} onChange ={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
        </div>
      
        <div class="form-group">
          <AiOutlineLock/>
          <input value={pass} onChange ={(e) => setPass(e.target.value)} type='password' placeholder='*****' id='password' name='password'/>
        </div>

        <button type='submit'>Sign up</button>
      </form>
      <button> 
        <Link to ="/login">
        Already have an account? Login here.
        </Link>
      </button>
    </div>
    );
};

export default SignUpForm;
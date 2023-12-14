import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'; 
import './LoginForm.scss';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineLock} from 'react-icons/ai';
import samefalogo from '../../assets/img/samefalogo.png';


const LoginForm = (setToken) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();  // 2. Use useNavigation hook

  const handleSubmit = async (e) => {
     e.preventDefault();
    
   const { data, error } = await supabase.auth.signInWithPassword({
     email: email,
     password: pass,
   })
   console.log(data)
  
  
   if (data) {  // Check if data is received which means successful login
     navigate('/');  // 3. Redirect to the homepage using navigate
     setToken(data)
   } else {
     console.error("Login error:", error);
     // Handle the error appropriately, like showing an error message to the user
   }

  }
    return (
    <div className='container'>
      <div className='auth-form'>
        <form onSubmit={handleSubmit}>
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

        <button type='submit' className='form-submit'>Log in</button>
      </form>  
    </div>

    <div className='signup-image'>
      <img src={samefalogo} alt='two girls coding'/>
        <div className='login-container'>
          <Link to ="/signup" className='login-link'>
            Don't have an account? Sign up here.
          </Link>
        </div>
      </div>
  </div>
    );
};

export default LoginForm;
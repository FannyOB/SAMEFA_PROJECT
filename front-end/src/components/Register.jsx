// COMPOSANT A REFACTORISER PAR FANNY

import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Register.scss';
import React, { useState } from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineLock} from 'react-icons/ai';
import samefalogo from '../assets/img/samefalogo.png';


const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();  // 2. Use useNavigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();
 
 
    if (pass.length <= 6) {
      // Handle this case appropriately, such as showing an error message
      alert("Password must be longer than 6 characters.");
      return;
    }
 
 
    // const { data, error } = await supabase.auth.signUp(
    //   {
    //     email: email,
    //     password: pass,
    //     options: {
    //       data: {
    //         first_name: name,
    //       }
    //     }
    //   }
    //   )
    //   console.log(data)
 
 
    // if (data) {  // Check if data is received which means successful login
    //   navigate('/');  // 3. Redirect to the homepage using navigate
    // } else {
    //   console.error("Signup error:", error);
    //   // Handle the error appropriately, like showing an error message to the user
    // }
  }
    return (
    <div className='container'>
      <div className='auth-form'>
        <div className='login-container'>
          <h1>Welcome</h1>
          <Link to ="/login" className='login-link'>
            Already have an account ? Login here.
          </Link>
        
{/* sign up form  */}
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
      

    {/* sign up form  */} 
    </div>
    <div className='signup-image'>
      <img src={samefalogo} alt='two girls coding'/>
      </div>
    </div>
  );
};

export default SignUpForm;
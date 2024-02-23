import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'; 
import '../styles/pages/LoginForm.scss';
import FormInput from '../components/FormInput';
import samefalogo from '../assets/img/samefalogo.png';

const LoginForm = (setToken) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  //const navigate = useNavigate();  // 2. Use useNavigation hook

  const handleSubmit = async (e) => {
     e.preventDefault();
    
  //  const { data, error } = await supabase.auth.signInWithPassword({
  //    email: email,
  //    password: pass,
  //  })
  //  console.log(data)
  
  
  //  if (data) {  // Check if data is received which means successful login
  //    navigate('/');  // 3. Redirect to the homepage using navigate
  //    setToken(data)
  //  } else {
  //    console.error("Login error:", error);
  //    // Handle the error appropriately, like showing an error message to the user
  //  }

  }
  return (
    <>
      <div className='container'>
        <div className='auth-form'>
          <div className='login-container'>
            <Link to ="/signup" className='login-link'>
              Don't have an account ? Sign up here.
            </Link>
            <form onSubmit={handleSubmit}>
              <FormInput 
                value={email} 
                onChange ={(e) => setEmail(e.target.value)} 
                type='email' 
                placeholder='Your Email' 
                id='email' 
                name='email'
                label='Email'/>
              <FormInput 
                value={pass} 
                onChange ={(e) => setPass(e.target.value)} 
                type='password' 
                placeholder='Password' 
                id='password' 
                name='password'
                label='Password'/>
            <button type='submit' className='form-submit'>Log in</button>
          </form> 
          </div> 
        </div>
        <div className='signup-image'>
          <img src={samefalogo} alt='two girls coding'/>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
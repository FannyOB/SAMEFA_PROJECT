// composant Login, les lignes 13 et de 18 à 31 sont les appels avec supabase, à changer.
import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'; 
import '../styles/pages/LoginForm.scss';
import FormInput from '../components/FormInput';
import logo from '../assets/img/logo_trans.png';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();  // 2. Use useNavigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: email,
        password: pass,
      },{ withCredentials: true });//permet l'envoi de cookies entre les domaines
      if (response.status === 200) {
        console.log(response.data.message);
        navigate('/'); // Redirection vers la homepage uniquement si la connexion réussit
      } else {
        // Gérer les autres statuts de réponse (non-200)
        console.error('Erreur lors de la connexion:', response.data.message);
        if (response.status === 401) {
          // Gérer le cas où le mot de passe est incorrect
          console.error('Mot de passe incorrect:',response.data.message);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // En cas d'erreur, restez également sur la page de connexion
    }
  }
  
    
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
  
  return (
    <>
      <div className='container'>
        <div className='auth-form'>
          <img src={logo} alt="Samefa-logo" />
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
      </div>
    </>
  );
};

export default LoginForm;
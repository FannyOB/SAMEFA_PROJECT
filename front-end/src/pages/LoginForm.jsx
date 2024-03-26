import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/pages/LoginForm.scss';
import axios from 'axios';
import FormInput from '../components/FormInput.jsx';
import logo from '../assets/img/logo_trans.png';
import { useAuth } from '../AuthContext.jsx';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loginAdmin, login } = useAuth(); // Accès à la fonction login du contexte d'authentification pour mettre à jour l'état global d'authentification.

  // Gestion de la soumission du formulaire.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email,
        password,
      });
      if (response.status === 200) {
        console.log(response.data.message);
        localStorage.setItem('token', response.data.token); // permet d'enregistrer le token dans le localStorage.
        console.log(response.data);
        if (response.data.isAdmin) {
          loginAdmin(); // Mets à jour l'état d'authentification après la connexion réussie
        } else {
          login();
        }
        navigate('/'); // Redirection vers la homepage uniquement si la connexion réussit
      } else {
        // Gérer les autres statuts de réponse (non-200)
        console.error('Erreur lors de la connexion:', response.data.message);
        if (response.status === 401) {
          // Gérer le cas où le mot de passe est incorrect
          console.error('Mot de passe incorrect:', response.data.message);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // En cas d'erreur, restez également sur la page de connexion
    }
  };
  return (
    <>
      <div className="container">
        <div className="auth-form">
          <img src={logo} alt="Samefa-logo" />
          <div className="login-container">
            <Link to="/signup" className="login-link">
              Don't have an account ? Sign up here.
            </Link>
            <form onSubmit={handleSubmit}>
              <FormInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                id="email"
                name="email"
                label="Email"
              />
              <FormInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                label="Password"
              />
              <button type="submit" className="form-submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

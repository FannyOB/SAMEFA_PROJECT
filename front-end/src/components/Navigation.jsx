// composant navigation
import { React } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/components/Navigation.scss';
import { FaUser } from 'react-icons/fa';
import ButtonAction from './ButtonAction.jsx';
import { useAuth } from '../AuthContext.jsx';

const Navigation = () => {
  // Utilisation du hook useAuth pour accéder à l'état d'authentification et la fonction de déconnexion.
  const { isAuthenticated, logout } = useAuth();
  return (
    <div className="navigation-wrapper">
      <ul>
        <NavLink to="/" className="navigation-link">
          <li>Home</li>
        </NavLink>
      </ul>
      <div className="navigation-button">
        {isAuthenticated ? (
          // Si l'utilisateur est authentifié, afficher l'icône utilisateur et un bouton de déconnexion.
          <>
            <FaUser />
            <ButtonAction
              type="primary"
              onClick={logout}
              style={{ backgroundColor: 'rgb(6, 150, 135)' }}
            >
              LOGOUT
            </ButtonAction>
          </>
        ) : (
          // Sinon, afficher les boutons Login et signup.
          <>
            <Link to="/signup">
              <ButtonAction
                type="primary"
                style={{ backgroundColor: 'rgb(6, 150, 135)' }}
              >
                SIGNUP
              </ButtonAction>
            </Link>
            <Link to="/login">
              <ButtonAction
                type="secondary"
                style={{ borderColor: 'rgb(6, 150, 135)' }}
              >
                LOGIN
              </ButtonAction>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;

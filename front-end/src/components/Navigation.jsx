// composant navigation
import { React } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/components/Navigation.scss';
import { FaUser } from 'react-icons/fa';
import ButtonAction from './ButtonAction.jsx';
import { useAuth } from '../AuthContext';

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="navigation-wrapper">
      <ul>
        <NavLink to="/" className="navigation-link">
          <li>Home</li>
        </NavLink>
        <NavLink to="/aboutUs" className="navigation-link">
          <li>About us </li>
        </NavLink>
      </ul>
      <div className="navigation-button">
        {isAuthenticated ? (
          <>
            <FaUser />
            <button onClick={logout}>Logout</button>
          </>
        ) : (
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

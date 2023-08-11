import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
    return (
        <div className='navigation-wrapper'>
        <ul>
            <NavLink to="/" className="navigation-link">
                <li>Home</li>
            </NavLink>
            <NavLink to="/aboutUs" className="navigation-link">
                <li>About us </li>
            </NavLink>
            <NavLink to="/categories" className="navigation-link">
                <li>Categories</li>
            </NavLink>
        </ul>
            <div className='navigation-button'> 
                <button>
                    <Link to="/signup" className="navigation-link">
                    SIGN UP
                    </Link>
                </button>
                <button>
                    <Link to="/login" className="navigation-link">
                        LOGIN
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Navigation;
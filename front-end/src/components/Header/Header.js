import React from 'react';
import logo from '../../assets/Logo.png'
import { NavLink, Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="img">
                <img src={logo} alt="Samefa-logo"/> 
            </div>
            <div className="nav-bar">
                <ul>
                    <NavLink to="/homepage" className="nav-link">
                        <li>HOME</li>
                    </NavLink>
                    <NavLink to="/aboutUs" className="nav-link">
                        <li>ABOUT US</li>
                    </NavLink>
                    <NavLink to="/categories" className="nav-link">
                        <li>CATEGORIES</li>
                    </NavLink>
                </ul>
                <div className="button">
                    <button>
                        <Link to="/" className="nav-link">SIGN UP</Link>
                    </button>
                    <button>
                        <Link to="/login" className="nav-link">LOG IN</Link>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;


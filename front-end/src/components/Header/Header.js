import React from 'react';
import logo from '../../assets/img/Logo.png'
import { NavLink, Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Samefa-logo"/> 
            </div>
                <nav>
                    <ul>
                        <NavLink to="/" className="nav-link">
                            <li>HOME</li>
                        </NavLink>
                        <NavLink to="/aboutUs" className="nav-link">
                            <li>ABOUT US</li>
                        </NavLink>
                        <NavLink to="/categories" className="nav-link">
                            <li>CATEGORIES</li>
                        </NavLink>
                    </ul>
                    <div className="nav-button">
                        <button>
                            <Link to="/signup" className="nav-link">SIGN UP</Link>
                        </button>
                        <button>
                            <Link to="/login" className="nav-link">LOG IN</Link>
                        </button>
                    </div>
                </nav>
        </header>
    );
};

export default Header;


import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
                <img src={logo} alt="Samefa-logo"/> 
                <ul className='navigation'>
                    <NavLink to="/homepage" className="navigation-link">
                    <li>HOME</li>
                    </NavLink>
                    <NavLink to="/aboutUs" className="navigation-link">
                    <li>ABOUT US</li>
                    </NavLink>
                    <NavLink to="/categories" className="navigation-link">
                    <li>CATEGORIES</li>
                    </NavLink>
                    <NavLink to="/" className="navigation-link">
                    <li>SIGN UP</li>
                    </NavLink>
                    <NavLink to="/login" className="navigation-link">
                    <li>LOGIN</li>
                    </NavLink>
                </ul>
    </header>
    );
};

export default Header;


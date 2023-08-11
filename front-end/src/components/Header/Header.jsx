import React from 'react';
import logo from '../../assets/img/Logo.png'
import Navigation from '../Navigation/Navigation';
import './Header.scss'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Samefa-logo"/> 
            </div>
            <Navigation/>
        </header>
    );
};

export default Header;


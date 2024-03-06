//composant Header qui reprend le composant Navigation
import React from 'react';
import logo from '../assets/img/logo_samefa.png'
import Navigation from './Navigation';
import '../styles/components/Header.scss'

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


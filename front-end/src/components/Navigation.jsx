// composant navigation
import {React} from 'react';
import { NavLink, Link} from 'react-router-dom';
import '../styles/components/Navigation.scss'
import ButtonAction from './ButtonAction';

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
            <NavLink to="/test" className="navigation-link">
                <li>Test Home</li>
            </NavLink>
        </ul>
            <div className='navigation-button'>
                <Link to="/signup" >
                    <ButtonAction type='primary' style={{backgroundColor: "rgb(6, 150, 135)"}} >SIGNUP</ButtonAction>
                </Link>
                <Link to="/login">
                    <ButtonAction type='secondary' style={{borderColor:"rgb(6, 150, 135)"}}>LOGIN</ButtonAction> 
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
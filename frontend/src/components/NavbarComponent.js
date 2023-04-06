import React from 'react';
import { Link } from 'react-router-dom';
import './css/NavbarComponent.css'
import logoText from '../assets/Logo-Text.png';
import logoIcon from '../assets/Logo-Icon.png';

const NavbarComponent = (props) => {
    return (
        <div className='navbar-component'>
            <Link to="/">
                <div className='navbar-component-logo'>
                    {/* <p className='navbar-component-text1'>'COURSE</p>
                    <p className='navbar-component-text2'>KNOT</p> */}
                    <img className='logoText' src={logoText} alt="Logo-Text" />
                    <img className='logoIcon' src={logoIcon} alt="logo-Icon" />
                </div>
            </Link>
            <div className='navbar-component-login'>
                <p>login</p>
                <p>sign up</p>
            </div>
        </div>
    );
};

export default NavbarComponent;

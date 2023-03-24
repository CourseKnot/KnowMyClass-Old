import React from 'react';
import './css/NavbarComponent.css'

const NavbarComponent = (props) => {
    return (
        <div className='navbar-component'>
            <div className='navbar-component-text'>
                <p className='navbar-component-text1'>'COURSE</p>
                <p className='navbar-component-text2'>KNOT</p>
            </div>
            <div className='navbar-component-login'>
                <p>login</p>
                <p>sign up</p>
            </div>
        </div>
    );
};

export default NavbarComponent;

import React from 'react';
import './css/NavbarComponent.css'

const NavbarComponent = (props) => {
    return (
        <div className='navbar-component'>
            <div className='navbar-component-text'>
                <p className='navbar-component-text1'>'COURSE</p>
                <p className='navbar-component-text2'>KNOT</p>
            </div>
            <p className='navbar-component-login'>login</p>
            <p className='navbar-component-login'>sign up</p>
        </div>
    );
};

export default NavbarComponent;

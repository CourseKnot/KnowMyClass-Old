import React from 'react';
import './css/Navbar.css';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";
import logo from "../assets/kmclogo.png"


const Navigationbar = () => {

  return (
    <nav className='navbar'>
      <div className="left-side">
        <div className="sidebar-toggle" >
          <Sidebar placement="start" name="start" />
        </div>
        <Link to="/" className="nav-item">
          <img
              src = {logo}
              
              className='logo-img'
              alt="KnowMyClass logo"
          />
        </Link>
      </div>
      
      <div className="nav-right">
        <Link to="login" className='nav-login'>Login</Link>
        <Link to="signup" className='nav-signup'>Sign up</Link>
      </div>

    </nav>
  );
};

export default Navigationbar;


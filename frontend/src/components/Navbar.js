import React, { useState } from 'react';
import './Navbar.css';
import Sidebar from './Sidebar';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

const Navigationbar = () => {

  return (
    <nav className='navbar'>
      <div className="left-side">
        <div className="sidebar-toggle" >
          <Sidebar />
        </div>
        <Link to="/" className="nav-item">
          <img
              src = {require("../assets/logo.png")}
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


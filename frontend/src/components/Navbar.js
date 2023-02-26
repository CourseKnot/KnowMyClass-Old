import React from 'react';
import './css/Navbar.css';
import Sidebar from './Sidebar';
import { Link, useLocation} from "react-router-dom";
import logo from "../assets/kmclogo.png"
import Searchbar from './Searchbar';


const Navigationbar = () => {

  const location = useLocation();
  const isMainpage = location.pathname === "/"

  return (
    <nav className='navbar'>
      <div className="nav-left">
        <div className="sidebar-toggle" >
          <Sidebar placement="start" name="start" />
        </div>
        <Link to="/">
          <img
              src = {logo}
              className='logo-img'
              alt="KnowMyClass logo"
          />
        </Link>
      </div>
      <div className='nav-search'>
        {isMainpage ? null : (
          <>
            {/* <Searchbar /> */}
          </>
        )}
      </div>
      <div className="nav-right">
        <Link to="login" className='nav-login'>Login</Link>
        <Link to="signup" className='nav-signup'>Sign up</Link>
      </div>

    </nav>
  );
};

export default Navigationbar;


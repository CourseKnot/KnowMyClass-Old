import React, { useState } from 'react';
import './css/Sidebar.css';
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="sidebar-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : <img src="https://img.icons8.com/ios-glyphs/30/null/menu--v1.png" alt='Menu'/>}
      </button>
      {isOpen && (
        <div className="sidebar">
          <ul>
            <li><a href="#">Home</a></li>
            <Link to="browse-classes" className='nav-login'>Browse Classes</Link>
            <li><a href="#">Rate a Class</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
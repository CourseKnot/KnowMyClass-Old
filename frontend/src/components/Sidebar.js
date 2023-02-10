import React, { useState } from 'react';
import './Sidebar.css';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="sidebar-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : <img src="https://img.icons8.com/ios-glyphs/30/null/menu--v1.png"/>}
      </button>
      {isOpen && (
        <div className="sidebar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Classes</a></li>
            <li><a href="#">Rate a Class</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;